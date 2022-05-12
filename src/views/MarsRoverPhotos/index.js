import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { changeWindowTitle } from "../../utils";

import Slider from "./Slider";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function MasrRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changeWindowTitle("Mars rover photos");

    const getPhotos = async () => {
      let url = `${process.env.REACT_APP_API}/mars-rover-photos`;
      let response = await axios.get(url);

      setPhotos(response.data);

      setLoading(false);
    };

    getPhotos();
  }, []);

  return (
    <Container maxWidth="xl">
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
        <Slider photos={photos} />
      )}
    </Container>
  );
}
