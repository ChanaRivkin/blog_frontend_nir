import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import {BlogProvider} from "./providers/Blog-provider";
import {router} from "./routes";
import {AuthProvider} from "./providers/Auth-provider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BlogProvider>
                <RouterProvider router={router}/>
            </BlogProvider>
        </AuthProvider>
    </React.StrictMode>
);

