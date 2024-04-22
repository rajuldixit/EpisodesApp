import React from "react";
import { IEpisodeDetail } from "../../Utils/Types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const EpisodeDetails = ({ episode }: { episode: IEpisodeDetail }) => {
  return (
    <Card sx={{ width: "345px" }}>
      <CardHeader
        title={episode.title}
        subheader={`S${episode.seasonNumber} E${episode.episodeNumber}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={episode.image}
        alt="episode image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {episode.summary}
        </Typography>
        <Stack
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          marginTop={1}
        >
          <InsertInvitationIcon />
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            {episode.airdate}
          </Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          display={"flex"}
          alignItems={"center"}
          marginTop={1}
          marginBottom={1}
        >
          <AccessTimeIcon />
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            {episode.runtime} min
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          <Rating
            name="episode rating"
            max={10}
            value={episode.avgRating}
            readOnly
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeDetails;
