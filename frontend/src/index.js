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
import {Auth0Provider} from "@auth0/auth0-react";

const domain  = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },

    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/skill",
        element: <Skills />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: `${window.location.origin}/dashboard`,
        }}
    >
        <RouterProvider router={router} />
    </Auth0Provider>

);

reportWebVitals();