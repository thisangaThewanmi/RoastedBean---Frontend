import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./pages/DashboardPage.tsx";
import Items from "./pages/Items.tsx";
import Order from "./pages/Order.tsx";
import StaffPage from "./pages/StaffPage.tsx";
import {store} from "./Store/Store.ts";
import {Provider} from "react-redux";


const router = createBrowserRouter(
    [
        {path:"/",element:<Dashboard/>},
        {path:"/item",element:<Items/>},
        {path:"/staff",element:<StaffPage/>},
        {path:"/order",element:<Order/>}
    ]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<RouterProvider router={router}/>*/}
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,

)
