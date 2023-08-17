import Image from "next/image";
import { BarChart2, User } from "react-feather";

import { H1, H2, P } from "@/components/UI/Typography";
import SpotifyIframe from "@/components/SpotifyIframe";
import { getSpotifyTopItems } from "@/services/spotify-services";
import type { Artist, Track } from "@/types/spotify";

const SpacePage = async () => {
  const tracks = (await getSpotifyTopItems("tracks", {
    time_range: "medium_term",
    limit: 5,
  })) as Track[];

  const artists = (await getSpotifyTopItems("artists", {
    time_range: "medium_term",
    limit: 5,
  })) as Artist[];

  return (
    <div>
      <section className="mb-14">
        <H1>Space</H1>
        <P>You will find out what I am listening and reading now a days.</P>
      </section>
      <div className="md:grid md:grid-cols-2 mb-14">
        <div className="mb-12 md:mb-0">
          <H2>My Top Tracks</H2>
          <div className="">
            {tracks.map((track, i) => {
              return (
                <div className="flex gap-4 py-2 px-4" key={track.id}>
                  <div className="opacity-70 h-full">
                    <span>{i + 1}.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={track.album.images[2].url}
                        alt={track.album.name}
                        className="rounded-md"
                        fill
                      />
                    </div>
                    <div className="">
                      <p className="">
                        <a
                          href={`https://open.spotify.com/track/${track.id}`}
                          target="_blank"
                        >
                          {track.name}
                        </a>
                      </p>
                      <p
                        className="flex items-center gap-1 text-sm font-thin opacity-80"
                        title="Artist"
                      >
                        <User size={14} />
                        {track.artists[0].name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <H2>My Top Artists</H2>
          <div className="">
            {artists.map((artist, i) => {
              return (
                <div className="flex gap-4 py-2 px-4" key={artist.id}>
                  <div className="opacity-70 h-full">
                    <span>{i + 1}.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src={artist.images[2].url}
                        alt={artist.name}
                        className="rounded-md"
                        fill
                      />
                    </div>
                    <div className="">
                      <p className="">
                        <a
                          href={`https://open.spotify.com/artist/${artist.id}`}
                          target="_blank"
                        >
                          {artist.name}
                        </a>
                      </p>
                      <p
                        className="flex items-center gap-1 text-sm font-thin opacity-80"
                        title="Popularity"
                      >
                        <BarChart2 size={14} />
                        {artist.popularity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-14">
        <H2>My Playlists</H2>
        <div className="sm:flex gap-4">
          <div className="mb-8">
            <SpotifyIframe link="https://open.spotify.com/embed/playlist/4lrpFbUvJCeczxGi4XuYaW?utm_source=generator&theme=0" />
          </div>
          <div className="mb-8">
            <SpotifyIframe link="https://open.spotify.com/embed/playlist/4Vj5zBlL30EwDbHgievazX?utm_source=generator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacePage;
