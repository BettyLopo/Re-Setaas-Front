import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserPage from "../pages/UserPage";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";
import Favs from "../pages/Favs";
import Search from "../pages/Search";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/sign-in',
                element: <Register />,
            },
            {
                path: '/user/:name?',
                element: <UserPage />,
            },
            {
                path: '/create',
                element: <Create />,
            },
            {
                path: '/edit/:name?',
                element: <Edit />,
            },
            {
                path: '/detail/:name',
                element: <Detail />,
            },
            {
                path: '/favs/:name?',
                element: <Favs />
            },
            {
                path: '/search',
                element: <Search />
            }
        ],
    },
]);