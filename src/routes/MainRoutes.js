import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function MainRoutes() {
  const routes = [
    {
      label: "Picture of the day",
      href: "/picture-of-the-day",
      icon: <InsertPhotoIcon />,
    },
    {
      label: "Mars rover photos",
      href: "/mars-rover-photos",
      icon: <InsertPhotoIcon />,
    },
  ];
  return routes
}
