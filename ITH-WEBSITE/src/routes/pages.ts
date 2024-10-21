import { Home } from "../pages";
import Contact from "../pages/Contact/contact";
import Media from "../pages/Media/media";

export const pages_route_group = [
  {
    element: Home,
    path: "/home",
  },
  {
    element: Contact,
    path: "/contact",
  },
  {
    element: Media,
    path: "/media",
  },
];
