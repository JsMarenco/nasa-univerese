import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CardTemplate from "./Card";

export default function APOD() {
  const [pictureData, setPictureData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/picture-of-the-day`
      );

      setPictureData(res.data);

      setLoading(false);
    };

    getData();
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
        <CardTemplate pictureData={pictureData} />
      )}
    </Container>
  );
}
