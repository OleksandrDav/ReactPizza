import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { SearchProvider } from "./context/SearchContext";
import Task from "./pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <App />
      </SearchProvider>
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
