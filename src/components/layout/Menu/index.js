import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import MainRoutes from "../../../routes/MainRoutes.js";
import AdditionalRoutes from "../../../routes/AdditionalRoutes.js";
import ContactLinks from "../../../routes/ContactLinks.js";

import Typography from "@mui/material/Typography";

export default function TemporaryDrawer() {
  let navigate = useNavigate()

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {MainRoutes().map((route, index) => (
          <ListItem button key={route.label + index} onClick={() => navigate(route.href)}>
            <ListItemIcon>{route.icon}</ListItemIcon>

            <Typography variant="body1" color="text.primary">
              {route.label}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {AdditionalRoutes().map((route, index) => (
          <ListItem key={route.label + index} button onClick={() => window.open(route.href, "_blank")}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <Typography variant="body1" color="text.primary">
              {route.label}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Typography
        mt={1}
        align="center"
        variant="subtitle1"
        color="text.primary"
      >
        My social networks
      </Typography>

      <List>
        {ContactLinks().map((route, index) => (
          <ListItem button key={route.label + index} onClick={() => window.open(route.href, "_blank")}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <Typography variant="body1" color="text.primary">
              {route.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button variant="text" color="primary">
        <MenuIcon onClick={toggleDrawer("left", true)} />
      </Button>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("anchor")}
      </Drawer>
    </div>
  );
}
