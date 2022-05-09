import React from "react";
import Container from "@mui/material/Container";
import { NASA_LOGO } from "../../components/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "background.default" }}>
      <Typography align="center" variant="h5" m={2} color="text.primary">
        NASA Api
      </Typography>

      <Box>
        <img
          style={{
            width: "300px",
            display: "flex",
            margin: "0 auto",
          }}
          src={NASA_LOGO}
          alt="Nasa logo"
        />
      </Box>
    </Container>
  );
}
