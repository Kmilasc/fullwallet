import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage";
import { AddTransaction } from "./pages/AddTransaction";
import { Home } from "./pages/Home";
import { AddAccount } from "./pages/AddAccount";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <InitialPage />,
    },
    {
        path: "/add-transaction",
        element: <AddTransaction />,
    },
    {
        path: "/add-account",
        element: <AddAccount />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
