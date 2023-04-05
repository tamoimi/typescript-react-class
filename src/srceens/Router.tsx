import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import About from "./About";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./Home";
import NotFound from "./NotFound";
import Followers from "./users/Followers";
import User from "./users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);
export default router;
