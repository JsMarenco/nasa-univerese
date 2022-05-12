import React from "react";
import { useEffect } from "react";
import { changeWindowTitle } from "../../utils";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function MasrRoverPhotos() {
  useEffect(() => {
    changeWindowTitle("Mars rover photos");
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" align="center" mt={4} color="text.primary">
        Available in the next update
      </Typography>
    </Container>
  );
}
