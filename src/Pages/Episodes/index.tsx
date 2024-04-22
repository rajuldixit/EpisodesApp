import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EpisodeList from "../../Components/EpisodeList";
import EpisodeDetails from "../../Components/EpisodeDetails";
import useEpisodesData from "../../Helpers/useEpisodesData";
import { IEpisodeDetail, IEpisodeListItem } from "../../Utils/Types";

const Episodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<IEpisodeDetail>();
  const { episodeById, episodeList } = useEpisodesData();
  const [formattedEpisodes, setFormattedEpisodes] = useState<
    Array<IEpisodeListItem>
  >(new Array());

  const getEpisodeDetails = (id: number) => {
    const episode = episodeById(id);
    setSelectedEpisode(episode);
  };
  useEffect(() => {
    const resp = episodeList();
    setFormattedEpisodes(resp);
  }, []);
  return (
    <Container
      sx={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        padding: "24px 0",
        boxSizing: "border-box"
      }}
    >
      <Stack
        sx={{
          width: "50%",
          borderRight: "1px solid lightgrey",
          maxHeight: "600px",
          overflowY: "scroll"
        }}
      >
        {formattedEpisodes && (
          <EpisodeList
            episodes={formattedEpisodes}
            onClick={getEpisodeDetails}
          />
        )}
      </Stack>
      <Stack sx={{ width: "50%", padding: "4%", boxSizing: "border-box" }}>
        {selectedEpisode ? (
          <EpisodeDetails episode={selectedEpisode} />
        ) : (
          <Typography>No Episode selected</Typography>
        )}
      </Stack>
    </Container>
  );
};

export default Episodes;
