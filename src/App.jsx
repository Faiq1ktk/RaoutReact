import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./component/Layout.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Dashboard from "./component/Dashboard.jsx";

import Course from "./component/Course.jsx";
import NatTest from "./component/NatTest.jsx";
import Result from "./component/Result.jsx";
import Records from "./component/Records.jsx";
import Students from "./component/Students.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "course",
            element: <Course />,
          },
          {
            path: "nat-test",
            element: <NatTest />,
          },
          {
            path: "result",
            element: <Result />,
          },
          {
            path: "records",
            element: <Records />,
          },
          {
            path: "students",
            element: <Students />,
          },
        ],
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;