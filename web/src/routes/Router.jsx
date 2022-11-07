import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useLocalStorage } from 'react-use';

import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/:username',
        element: <Profile />
    },
]);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}
