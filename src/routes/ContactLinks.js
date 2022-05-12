import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  INSTAGRAM_LINK,
} from "../components/constants";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactLinks() {
  const routes = [
    {
      label: "Facebook",
      href: FACEBOOK_LINK,
      icon: <FacebookIcon />,
    },
    {
      label: "Twitter",
      href: TWITTER_LINK,
      icon: <TwitterIcon />,
    },
    {
      label: "Instagram",
      href: INSTAGRAM_LINK,
      icon: <InstagramIcon />,
    },
    {
      label: "GitHub",
      href: GITHUB_LINK,
      icon: <GitHubIcon />,
    },
  ];

  return routes;
}
