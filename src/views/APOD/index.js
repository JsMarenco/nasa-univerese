import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CardTemplate from "./Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { returnDate } from "../../utils/index";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function APOD() {
  const [pictureData, setPictureData] = useState({});
  const [loading, setLoading] = useState(false);
  const [rawDate, setRawDate] = React.useState(new Date());
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/apod`);

      setPictureData(res.data);

      setLoading(false);
    };

    getData();
  }, []);

  const sendRequest = async () => {
    let newDate = returnDate(rawDate);

    const res = await axios.get(
      `${process.env.REACT_APP_API}/apod/filter?start_date=${newDate}&end_date=${newDate}`
    );

    if (res.data.message === "bad request") {
      setErrorMessage("Please, enter a valid date");

      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
    } else {
      setPictureData(res.data[0]);
    }
  };

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
        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography variant="h6" mb={2} align="center" color="text.primary">
              You can also choose a specific day
            </Typography>

            <Stack
              sx={{ alignItems: "center" }}
              spacing={2}
              direction="row"
              mb={2}
            >
              <MobileDatePicker
                label="End date"
                value={rawDate}
                onChange={(newValue) => {
                  setRawDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <Button
                startIcon={<SearchIcon />}
                color="primary"
                variant="outlined"
                onClick={() => sendRequest()}
              >
                Get photo
              </Button>

              <Typography variant="subtitle1" color="text.error">
                {errorMessage}
              </Typography>
            </Stack>

            <CardTemplate pictureData={pictureData} />
          </LocalizationProvider>
        </Box>
      )}
    </Container>
  );
}
