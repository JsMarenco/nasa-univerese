import { GITHUB_REPO } from "../components/constants";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AdditionalRoutes() {
  const routes = [
    {
      label: "Project repo",
      href: GITHUB_REPO,
      icon: <GitHubIcon />,
    },
  ];

  return routes;
}
