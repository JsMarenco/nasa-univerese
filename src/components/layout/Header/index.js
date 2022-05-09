import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import routes from "../../../routes/routes.json";

export default function Header() {
  return (
    <AppBar position="relative" color="primary" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography flexGrow={1} variant="h6">
            Home
          </Typography>

          <ButtonGroup
            variant="outlined"
            color="primary"
            aria-label="Navigations-links"
          >
            {routes.map((link, index) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={link.href}
                  key={link.label + index}
                >
                  <Typography
                    sx={{
                      p: 1,
                      ml: 1,
                      "&:hover": {
                        color: "rgb(183,143,254)",
                      },
                    }}
                    variant="body2"
                    color="text.primary"
                  >
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
