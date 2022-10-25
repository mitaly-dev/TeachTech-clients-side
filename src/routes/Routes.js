import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Errorpage from "../Pages/Errorpage/Errorpage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";

const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/courses',element:<Courses></Courses>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/faq',element:<FAQ></FAQ>},
        {path:'/courses/:id',
        loader:async({params})=>fetch(`https://teach-tech-server.vercel.app/courses/${params.id}`),
        element:<CourseDetails></CourseDetails>},
        {path:'/primium_access/:id',
        loader:async({params})=>fetch(`https://teach-tech-server.vercel.app/primium_access/${params.id}`)
        
        }
    ]
    }
])
export default router