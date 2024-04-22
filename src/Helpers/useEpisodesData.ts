import React from "react";
import episodes from "../Utils/Episodes.json";
import { IEpisodeDetail } from "../Utils/Types";

const useEpisodesData = () => {
  const episodeList = () => {
    const formatedEpisodes = episodes?.map((episode) => {
      return {
        id: episode.id,
        seasonNumber: episode.season,
        episodeNumber: episode.number,
        title: episode.name
      };
    });
    return formatedEpisodes;
  };
  const episodeById = (id: number) => {
    const filteredEpisode = episodes.filter((episode) => episode.id === id);

    const formatedEpisode: IEpisodeDetail = {
      id: filteredEpisode[0].id,
      title: filteredEpisode[0].name,
      image: filteredEpisode[0].image.original,
      seasonNumber: filteredEpisode[0].season,
      episodeNumber: filteredEpisode[0].number,
      airdate: filteredEpisode[0].airdate,
      runtime: filteredEpisode[0].runtime,
      avgRating: filteredEpisode[0].rating.average,
      summary: filteredEpisode[0].summary.replace(/(<([^>]+)>)/gi, "")
    };
    return formatedEpisode;
  };
  return {
    episodeList,
    episodeById
  };
};

export default useEpisodesData;
