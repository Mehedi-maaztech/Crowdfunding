import { useLoaderData } from "react-router-dom";
import Campaign from "./Campaign";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AllCampaigns = () => {
    const campaigns = useLoaderData();
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main className="max-w-7xl mx-auto">
                <h2 className="text-3xl text-center text-yellow-700 font-semibold py-10">Check All Our Campaigns</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto px-4">
                    Explore a variety of meaningful campaigns dedicated to making a positive impact across communities worldwide.
                    From providing education and clean water to supporting local farmers and empowering women, each campaign represents
                    an opportunity to bring real change. Join us in contributing to causes that matter and help make the world a better place —
                    one step at a time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:py-10">
                    {
                        campaigns.map(campaign => <Campaign key={campaign._id} campaign={campaign} ></Campaign>)
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllCampaigns;