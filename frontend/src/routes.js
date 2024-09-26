import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Task from "./pages/Task";
import FullPizza from "./pages/FullPizza";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: 'pizza/:id',
        element: <FullPizza />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/tasks",
    element: <Task />,
  }
]);

export default router;
