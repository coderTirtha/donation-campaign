import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donations from './components/Donations/Donations';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('../donation.json'),
        element: <Home></Home>
      }, 
      {
        path: '/donation',
        element: <Donations></Donations>
      },
      {
        path: '/donationDetails/:id',
        loader: () => fetch('../donation.json'),
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
