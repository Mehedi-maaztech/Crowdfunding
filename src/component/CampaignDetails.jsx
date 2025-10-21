import { useLoaderData } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const CampaignDetails = () => {
    const details = useLoaderData();
    const { title, image, description, goal, raised, deadline } = details;

    // --- Helper Calculations and Formatting ---
    const progressPercent = Math.min((raised / goal) * 100, 100);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <div className="hero bg-base-100 min-h-[calc(100vh-100px)] pt-16 pb-16">
                    <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto p-4 lg:p-8">

                        <div className="w-full lg:w-1/2 flex justify-center lg:pr-8">
                            <img
                                src={image}
                                alt={title}
                                className="w-full max-w-lg lg:max-w-none h-auto object-cover rounded-xl shadow-2xl transition duration-300 hover:shadow-primary/50"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">

                            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-primary">
                                {title}
                            </h1>
                            <p className="py-6 text-lg text-base-content/90">
                                {description}
                            </p>

                            <div className="card bg-base-200 p-6 shadow-lg mb-6">
                                <p className="text-xl font-bold mb-2">
                                    {formatCurrency(raised)} **raised** of {formatCurrency(goal)} **goal**
                                </p>

                                <progress
                                    className={`progress ${progressPercent < 50 ? 'progress-warning' : 'progress-success'} w-full h-3`}
                                    value={progressPercent}
                                    max="100"
                                ></progress>

                                <div className="flex justify-between mt-2 text-sm font-medium">
                                    <span className="text-success">{progressPercent.toFixed(1)}% Funded</span>
                                    <span className="text-warning">Ends: **{deadline}**</span>
                                </div>
                            </div>

                            <button className="btn btn-warning btn-lg w-full mt-4 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.485 0-4.5 1.567-4.5 3.5s2.015 3.5 4.5 3.5 4.5-1.567 4.5-3.5-2.015-3.5-4.5-3.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L16.243 18.07c-2.046 2.047-5.366 2.047-7.412 0L7.343 16.657M6.085 13H5c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h1.085" />
                                </svg>
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CampaignDetails;