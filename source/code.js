import React from "react";
import ReactDOM from "react-dom";
import HeaderComponet from "../components/Header";
import Body from "../components/Body";
import  {Footer}  from "../components/Footer";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorPage";
import { RouterProvider } from "react-router-dom";
import AboutPage from "../components/AboutPage";
import { Outlet } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import ResturnatDetails from "../components/Resturantdetails";


const AppLayout=()=>{
  return (
    <>
    <HeaderComponet/>
    <Outlet/>
    <Footer/>
    </>
    )
}
const AppRouter=createBrowserRouter([ 
  { path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorMessage/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/contact",
        element:<ContactPage/>
      },{
        path:"/resturant/:id",
        element:<ResturnatDetails/>,
      }
    ]
  },
  
])



const root = document.getElementById("hello");
ReactDOM.render(<RouterProvider router={AppRouter}/>, root);
