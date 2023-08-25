import { FC } from "react";

interface Props {
  trackId: string;
}

const TrackIframe: FC<Props> = (props) => {
  const { trackId } = props;
  const src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
  return (
    <iframe
      //   style={{ borderRadius: "12px" }}
      className="rounded-md"
      src={src}
      width="100%"
      height="100%"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default TrackIframe;
