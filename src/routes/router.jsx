import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage';
import AddNewCampaign from '../pages/AddNewCampaign';
import AuthLayout from '../layouts/AuthLayout';
import Signin from '../component/Signin';
import Register from '../component/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/signin',
                element: <Signin></Signin>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/addNewCampaign',
        element: <AddNewCampaign></AddNewCampaign>
    },
])

export default router;