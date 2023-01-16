import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Actors from "../Pages/Actors/Actors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MovieInformation from "../Pages/MovieInformation/MovieInformation";
import Movies from "../Pages/Movies/Movies";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <MovieInformation />,
      },
      {
        path: "/actors/:id",
        element: <Actors />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
   path:"*",
   element:<ErrorPage/>
  }
]);