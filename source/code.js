import React, { useContext } from "react";
import ReactDOM from "react-dom";
import HeaderComponet from "../components/Header";
import Body from "../components/Body";
import { Footer } from "../components/Footer";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorPage";
import { RouterProvider } from "react-router-dom";
import AboutPage from "../components/AboutPage";
import { Outlet } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import ResturnatDetails from "../components/Resturantdetails";
import UserContext from "../contexts/UserContext";
import {Provider} from "react-redux"
import store from "../uitils/store";


const AppLayout = () => {
  // Using useContext hook to access user context
  const user = useContext(UserContext);

  return (
    <>
        <Provider store={store}>
        <HeaderComponet />
        <Outlet />
        <Footer />
        </Provider>
        
      
      </>
    
  );
}

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/resturant/:id",
        element: <ResturnatDetails />,
      }
    ]
  },
]);

const root = document.getElementById("hello");
ReactDOM.render(<RouterProvider router={App} />, root);
