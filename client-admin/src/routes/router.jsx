import {
    createBrowserRouter,
    redirect
} from "react-router-dom";
import LoginPage from '../views/LoginPage'
import DashboardPage from '../views/DashboardPage'
import CategoriesPage from '../views/CategoriesPage'
import Layout from "../components/Layout";
import RegisterAdmin from '../views/RegisterAdmin'
import AddProduct from '../views/AddProduct'
import AddCategory from '../views/AddCategory'
import EditCategory from '../views/EditCategory'
import EditProduct from '../views/EditProduct'
import DetailImage from "../views/DetailImage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        loader: () => {
            if (!localStorage.getItem("access_token")) {
                return redirect('/')
            }
            return null;
        },
        children: [
            {
                path: "/home",
                element: <DashboardPage />
            },
            {
                path: "/categories",
                element: <CategoriesPage />
            },
            {
                path: "/admin-register",
                element: <RegisterAdmin />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/image-product/:id",
                element: <DetailImage />
            },
            {
                path: "/edit-product/:id",
                element: <EditProduct />
            },
            {
                path: "/edit-category/:id",
                element: <EditCategory />
            },
            {
                path: "/add-category",
                element: <AddCategory />
            },
        ]
    },
    {
        path: "/",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
                return redirect('/home')
            }
            return null;
        },
      },
]);

export default router