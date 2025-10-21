import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Campaign from "./Campaign";

const MyCampaign = () => {
    const campaigndata = useLoaderData();
    const { username } = useParams();
    const myCampaigns = campaigndata.filter(c => c.username === username)
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8 gap-4 p-4 md:py-10">
                    {
                        myCampaigns.length === 0 ? <p className="text-xl text-center text-shadow-yellow-600">Make sure to add campaign</p> : myCampaigns.map(campaign => (
                            <Campaign key={campaign._id} campaign={campaign} />
                        ))
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyCampaign;