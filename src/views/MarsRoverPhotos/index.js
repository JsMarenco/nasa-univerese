import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { changeWindowTitle } from "../../utils";

import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function MasrRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [photosPerPage, setPhotosPerPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [maxPage, setMaxPage] = useState(0);
  const limit = 12;

  useEffect(() => {
    changeWindowTitle("Mars rover photos");

    const getPhotos = async () => {
      let url = `${process.env.REACT_APP_API}/mars-rover-photos`;
      let response = await axios.get(url);

      setPhotos(response.data);

      setPage(1);

      setMaxPage(Math.ceil(response.data.length / limit));
    };

    getPhotos();
  }, []);

  useEffect(() => {
    const setss = () => {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      let newPhotos = photos.slice(startIndex, endIndex);

      setPhotosPerPages(newPhotos);

      setLoading(false);
    };

    setss();
  }, [page]);

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
          <Box sx={{ columns: "5 320px", columnGap: ".5em" }}>
            {photosPerPage.map((photo, index) => {
              return (
                <img
                  key={`${photo.img_src}_${index}`}
                  src={photo.img_src}
                  style={{ maxWidth: "100%", marginBottom: ".5em" }}
                  alt={`Date: ${photo.earth_date} Rover: ${photo.rover.name} `}
                />
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              sx={{ m: 1 }}
              hidePrevButton
              hideNextButton
              count={maxPage}
              variant="outlined"
              color="primary"
              onChange={(e) => setPage(Number(e.target.innerText))}
            />
          </Box>
        </>
      )}
    </Container>
  );
}
