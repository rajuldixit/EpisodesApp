import React from "react";
import "./App.css";
import Episodes from "./Pages/Episodes";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        padding: "24px 0",
        boxSizing: "border-box"
      }}
    >
      <Typography variant="h4">Episodes</Typography>
      <Episodes />
    </Container>
  );
}

export default App;
