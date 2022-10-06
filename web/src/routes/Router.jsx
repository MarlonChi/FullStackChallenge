import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
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
]);

export const Router = () => (
  <RouterProvider router={router} />
)
