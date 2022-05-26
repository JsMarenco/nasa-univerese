import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// ICONS
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import ContactLinks from "../../../routes/ContactLinks";

export default function Footer() {
  let navidate = useNavigate()

  return (
    <Container maxWidth="xl">
      <Typography
        align="center"
        variant="h6"
        mt={1}
        mb={1}
        color="text.primary"
      >
        Contact me
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
        }}
      >
        <ButtonGroup variant="text" color="primary" aria-label="contact-link">
          <Button startIcon={<ArrowBackIosIcon />} variant="contained" onClick={() => navidate(-1)} color="primary">
            Back
          </Button>

          {
            ContactLinks().map((link, index) => {
              return (
                <Button key={`${link.href}_${index}`} onClick={() => window.open(link.href, "_blank")} variant="outlined" sx={{ mx: 1 }}>
                  {link.icon}
                </Button>
              )
            })
          }

          <Button startIcon={<HomeIcon />} variant="contained" onClick={() => navidate("/")} color="primary">
            Home
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
