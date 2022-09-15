import React from "react";
import ReactDOM from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Index from "./routes/index";
import EditCharacter, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Character, { loader as characterLoader, action as characterAction, } from "./character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "characters/:characterId",
        element: <Character />,
        loader: characterLoader,
        action: characterAction,
      },
      {
        path: "characters/:characterId/edit",
        element: <EditCharacter />,
        loader: characterLoader,
        action: editAction,
      },
      {
        path: "characters/:characterId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
