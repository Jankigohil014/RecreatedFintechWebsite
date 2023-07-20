import React, {useEffect} from 'react';
import HomePage from './Pages/HomePage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ApplyPage from './Pages/ApplyPage';
import RootLayout from './RootLayout';
import SupportPage from './Pages/SupportPage';
import AOS from 'aos';
// import Alpine from 'alpinejs';

const App = () => {
    useEffect(() => {
        AOS.init({
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease-out-cubic', // default easing for AOS animations
        });
        AOS.refresh();
    }, []);
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
