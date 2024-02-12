import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import App from "./App";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";


const Routes = createBrowserRouter ( [
    {
        path: '/', 
        element: <App />,
         children : [
            {
                path : "/", 
                element: <Home />
            },
            {
                path : "/cart", 
                element: <Cart />
            },
            {
                path : "/about", 
                element: <About />
            },
         ]
    
    }
])
export default Routes;