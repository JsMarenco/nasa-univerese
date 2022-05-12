import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Menu from "../Menu";

export default function Header() {
  return (
    <AppBar position="relative" color="primary" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography color="text.primary" variant="h6">
              Home
            </Typography>
          </Link>

          <Menu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
