import { useLoaderData } from 'react-router-dom';
import Banner from '../component/Banner';
import RunningCampaign from '../component/RunningCampaign';

const HomePage = () => {
    const limitedcampaigns = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RunningCampaign limitedcampaigns={limitedcampaigns}></RunningCampaign>
        </div>
    );
};

export default HomePage;