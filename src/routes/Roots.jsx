import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homelayout></Homelayout>
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