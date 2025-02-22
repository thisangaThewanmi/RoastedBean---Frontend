import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/DashboardPage.tsx";
import Items from "./pages/Items.tsx";
import Staff from "./pages/Staff.tsx";
import Order from "./pages/Order.tsx";


const router = createBrowserRouter(
    [
        {path:"/",element:<Dashboard/>},
        {path:"/item",element:<Items/>},
        {path:"/staff",element:<Staff/>},
        {path:"/order",element:<Order/>}
    ]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
