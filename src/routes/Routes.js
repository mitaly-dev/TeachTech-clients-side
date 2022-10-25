import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";

const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/courses',element:<Courses></Courses>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/faq',element:<FAQ></FAQ>}
    ]
    }
])
export default router