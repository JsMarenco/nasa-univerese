import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CardTemplate(props) {
  const { pictureData } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={1.5}
    >
      <Grid item xs={12} lg={12}>
        <Paper
          sx={{
            p: 1,
            background: "background.paper",
          }}
          elevation={3}
        >
          <Typography align="center" variant="h5" color="text.primary">
            {pictureData.title}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} lg={8}>
        <Paper sx={{ p: 1, bgcolor: "background.paper" }} elevation={3}>
          {pictureData.media_type === "image" ? (
            <img
              style={{ width: "100%", maxHeight: "450px" }}
              src={pictureData.url}
              alt={`${pictureData.title}`}
            />
          ) : (
            <iframe
              style={{ width: "100%", minHeight: "400px" }}
              src={pictureData.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </Paper>
      </Grid>

      <Grid item xs={12} lg={4}>
        <Paper
          sx={{
            p: 1,
            background: "background.paper",
          }}
          elevation={3}
        >
          <Typography variant="body2" color="text.primary">
            {pictureData.explanation}
          </Typography>

          <Typography variant="body1" mt={1} color="text.primary">
            {`Author: ${
              pictureData.copyright ? pictureData.copyright : "Unknown author"
            }`}
          </Typography>

          <Typography variant="body1" mt={1} color="text.primary">
            Date: {pictureData.date}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
