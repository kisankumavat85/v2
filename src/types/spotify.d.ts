export type TopItemsOptions = {
  time_range: "short_term" | "medium_term" | "long_term" = "short_term";
  limit: number = 7;
};

export type Track = {
  id: string;
  name: string;
  album: {
    name: string;
    images: {
      url: string;
    }[];
  };
  artists: {
    name: string;
  }[];
};

export type Artist = {
  id: string;
  name: string;
  popularity: string;
  images: {
    url: string;
  }[];
};
