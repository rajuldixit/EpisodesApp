export type IEpisodeDetail = {
  id: number;
  title: string;
  image: string;
  seasonNumber: number;
  episodeNumber: number;
  airdate: string;
  runtime: number;
  avgRating: number;
  summary: string;
};
export type IEpisodeListItem = {
  id: number;
  seasonNumber: number;
  episodeNumber: number;
  title: string;
};
