import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/layout/NotFound";
import { Project } from "./components/pages/Project";
import {Skills} from "./components/pages/Skills";
import {Contact} from "./components/pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NotFound />,
        errorElement: <NotFound />,
    },
    {
        path: "https://joshcodes-eight.vercel.app/dashboard",
        element: <Dashboard />,
    },
    {
        path: "https://joshcodes-eight.vercel.app/contacts",
        element: <Contact />,
    },

    {
        path: "https://joshcodes-eight.vercel.app",
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: "https://joshcodes-eight.vercel.app/projects",
        element: <Project />
    },
    {
        path: "https://joshcodes-eight.vercel.app/skills",
        element: <Skills />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();