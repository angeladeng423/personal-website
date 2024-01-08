import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClickedProvider from './context/ClickedProvider';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickedProvider>
      <RouterProvider router = {router}/>
    </ClickedProvider>
  </React.StrictMode>
);