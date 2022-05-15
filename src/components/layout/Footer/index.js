import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK,
} from "../../constants";

// ICONS
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Footer() {
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
          <Button href={FACEBOOK_LINK} variant="outlined" sx={{ mx: 1 }}>
            <FacebookIcon />
          </Button>

          <Button href={GITHUB_LINK} variant="outlined" sx={{ mx: 1 }}>
            <GitHubIcon />
          </Button>

          <Button href={INSTAGRAM_LINK} variant="outlined" sx={{ mx: 1 }}>
            <InstagramIcon />
          </Button>

          <Button href={TWITTER_LINK} variant="outlined" sx={{ mx: 1 }}>
            <TwitterIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
