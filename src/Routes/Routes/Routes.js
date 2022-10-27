import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Courses/Course";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleCourse from "../../Pages/Shared/SingleCourse";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/courses",
        element: <Course></Course>,
      },
      {
        path: "/singleCourse/:id",
        element: <SingleCourse></SingleCourse>,
      },
    ],
  },
  {
    path: "/faq",
    element: <Faq></Faq>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
