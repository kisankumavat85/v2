import { User } from "react-feather";

import { H1, H2, P } from "@/components/UI/Typography";
import TrackIframe from "@/components/SpotifyIframe/TrackIframe";
import { getSpotifyTopItems } from "@/services/spotify-services";
import { books } from "@/constants";
import type { Track } from "@/types/spotify";

const SpacePage = async () => {
  const tracks = (await getSpotifyTopItems("tracks", {
    time_range: "medium_term",
    limit: 5,
  })) as Track[];

  return (
    <div>
      <section className="mb-14">
        <H1>My Space</H1>
        <P>You will find out what I am listening and reading now a days.</P>
      </section>
      <div className="mb-14">
        <H2>My Recent Reads</H2>
        <div>
          <ul className="">
            {books.map((book, i) => (
              <li className="flex gap-2 mb-2" key={book.name}>
                <div className="opacity-70 h-full">
                  <span>{i + 1}. </span>
                </div>
                <div>
                  <div className="opacity-90" title={book.name}>
                    {book.name}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-light opacity-70">
                    <User size={16} /> {book.authore}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-14">
        <H2>My Top Tracks</H2>
        <div className="grid md:grid-cols-2 gap-4">
          {tracks.slice(0, 4).map((track) => (
            <div className="h-[80px]" key={track.id}>
              <TrackIframe trackId={track.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacePage;
