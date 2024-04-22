import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { IEpisodeListItem } from "../../Utils/Types";

type IEpisodeListProps = {
  episodes: Array<IEpisodeListItem>;
  onClick: (id: number) => void;
};
const EpisodeList = ({ episodes, onClick }: IEpisodeListProps) => {
  return (
    <Grid container sx={{ padding: "8px 0" }} spacing={{ xs: 2, md: 2 }}>
      {episodes.map((episode: IEpisodeListItem) => (
        <Grid item xs={12} key={episode.id}>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            sx={{ cursor: "pointer" }}
            onClick={() => onClick(episode.id)}
          >
            <Typography>
              S{episode.seasonNumber} E{episode.episodeNumber}
            </Typography>
            <Typography marginLeft={2}>{episode.title}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default EpisodeList;
