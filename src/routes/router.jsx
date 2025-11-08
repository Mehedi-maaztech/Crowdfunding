import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage';
import AddNewCampaign from '../pages/AddNewCampaign';
import AuthLayout from '../layouts/AuthLayout';
import Signin from '../component/Signin';
import Register from '../component/Register';
import AllCampaigns from '../component/AllCampaigns';
import MyCampaign from '../component/MyCampaign';
import CampaignDetails from '../component/CampaignDetails';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('https://crowdfunding-server-yg1l.onrender.com/campaigns/lmt')
            }

        ]
    },
    {
        path: '/allCampaign',
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch('https://crowdfunding-server-yg1l.onrender.com/campaigns')
    },
    {
        path: '/campaigns/:id',
        element: <PrivateRoutes><CampaignDetails></CampaignDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://crowdfunding-server-yg1l.onrender.com/campaigns/${params.id}`)
    },
    {
        path: '/addNewCampaign',
        element: <PrivateRoutes><AddNewCampaign></AddNewCampaign></PrivateRoutes>,
    },
    {
        path: '/myCampaign/user/:username',
        element: <PrivateRoutes><MyCampaign></MyCampaign></PrivateRoutes>,
        loader: ({params}) => fetch(`https://crowdfunding-server-yg1l.onrender.com/campaigns/user/${params.username}`)
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
    }
])

export default router;