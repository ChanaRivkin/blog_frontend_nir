import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './-Index.css';
import App from './App';
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Admin } from "./pages/Admin";
import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Post } from "./pages/Post";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Posts",
                element: <Posts />,
            },
            {
                path: "/Posts/:id",
                element: <Post />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Admin',
                element: <Admin />,
            }
        ],
    },
]);


