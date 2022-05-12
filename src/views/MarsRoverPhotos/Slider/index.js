import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { useEffect } from "react";
import Container from "@mui/material/Container";

import { getScreenWith } from "../../../utils";

export default function Slider(props) {
  const { photos } = props;
  const [position, setPosition] = useState(0);
  const [currentePhoto, setCurrentPhoto] = useState({});
  const [desactiveNextBtn, setDesactivateNextBtn] = useState(false);
  const [desactivePrevBtn, setDesactivatePrevBtn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [theDisplay, setTheDisplay] = useState("flex");

  useEffect(() => {
    if (getScreenWith()) {
      setTheDisplay("block");
    }
  }, []);

  useEffect(() => {
    prevBtn();
    nextBtn();

    setCurrentPhoto(photos[position]);

    setLoading(false);
  }, [position]);

  const nextBtn = () => {
    if (position === photos.length - 1) {
      setDesactivateNextBtn(true);
    } else {
      setDesactivateNextBtn(false);
    }
  };

  const prevBtn = () => {
    if (position === 0) {
      setDesactivatePrevBtn(true);
    } else {
      setDesactivatePrevBtn(false);
    }
  };

  return (
    <Container maxWidth="lg">
      {loading ? (
        <Box
          sx={{
            display: "flex",
            height: "400px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          <Paper
            sx={{
              bgcolor: "background.paper",
              p: 2,
              display: theDisplay,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="subtitle1" color="text.primary">
              {`Date: ${currentePhoto.earth_date} `}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              {`Rover: ${currentePhoto.rover.name} `}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              {`${position + 1} / ${photos.length} photos`}
            </Typography>
          </Paper>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={(e) => setPosition(position - 1)}
              disabled={desactivePrevBtn ? true : false}
              sx={{ borderRadius: "100%" }}
              variant="outlined"
              color="primary"
            >
              <ArrowLeftIcon color="primary" sx={{ fontSize: "3em" }} />
            </Button>

            <Box sx={{ mx: 2, width: "80%" }}>
              <Paper sx={{ bgcolor: "background.paper", p: 2 }}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={currentePhoto.img_src}
                  alt={`Date: ${currentePhoto.earth_date} Rover: ${currentePhoto.rover.name} `}
                />
              </Paper>
            </Box>

            <Button
              onClick={(e) => setPosition(position + 1)}
              sx={{ borderRadius: "100%" }}
              color="primary"
              variant="outlined"
              disabled={desactiveNextBtn ? true : false}
            >
              <ArrowRightIcon color="primary" sx={{ fontSize: "3em" }} />
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}
