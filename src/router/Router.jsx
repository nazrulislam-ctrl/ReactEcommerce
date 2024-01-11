import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Contact from "../pages/Contact"
import Notfound from "../pages/Notfound"
import App from "../App"
import ProductDetails from "../pages/ProductDetails"

export const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "productDetails/:id",
                element: <ProductDetails/>,
            },
            {
                path: "*",
                element: <Notfound/>,
            },
        ]
    }
])