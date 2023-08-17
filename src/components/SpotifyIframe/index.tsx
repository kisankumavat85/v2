import { FC } from "react";

interface Props {
  link: string;
}

const SpotifyIframe: FC<Props> = (props) => {
  const { link } = props;

  return (
    <iframe
      style={{ borderRadius: 12 }}
      src={link}
      width="100%"
      height="452"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyIframe;
