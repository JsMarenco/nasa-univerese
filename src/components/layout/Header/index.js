import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Menu from "../Menu";

export default function Header() {
  let navigate = useNavigate()

  return (
    <AppBar position="relative" color="primary" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ cursor: "pointer" }} color="text.primary" variant="h6" onClick={() => navigate("/")}>
            NASA
          </Typography>

          <Menu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
