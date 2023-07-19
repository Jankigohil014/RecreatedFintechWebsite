import React from 'react';
import HomePage from './Pages/HomePage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ApplyPage from './Pages/ApplyPage';
import RootLayout from './RootLayout';
import SupportPage from './Pages/SupportPage';

const App = () => {
    const router_routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'apply',
                    element: <ApplyPage />,
                },
                {
                    path: 'support',
                    element: <SupportPage />,
                },
            ],
        },
    ]);
    return (
        <React.Fragment>
            <RouterProvider router={router_routes} />
        </React.Fragment>
    );
};

export default App;
