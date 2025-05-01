import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../pages/Home";
import Category from "../components/Category";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homelayout></Homelayout>,
        children: [
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ()=> fetch ("/news.json"),
            },
        ]
    },
    {
        path:'/auth',
        element:<h1>hey auth</h1>
    },
    {
        path:'/*',
        element:<h2>error 404</h2>
    }
]);

export default router;