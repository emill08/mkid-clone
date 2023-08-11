import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from '../views/HomePage'
import ProductPage from '../views/ProductPage'
import DetailPage from '../views/DetailPage'
import KeyboardPage from '../views/KeyboardPage'
import SwitchPage from '../views/SwitchPage'
import AccessoriesPage from '../views/AccessoriesPage'


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductPage />
            },
            {
                path: "/detail/:id",
                element: <DetailPage />
            },
            {
                path: "/keyboard-page",
                element: <KeyboardPage />
            },
            {
                path: "/switch-page",
                element: <SwitchPage />
            },
            {
                path: "/accessories-page",
                element: <AccessoriesPage />
            },
        ]
    }
])


export default router