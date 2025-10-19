import React, { useEffect, useState } from "react";
import Campaign from "./Campaign";

const RunningCampaign = () => {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch('/campaigns.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center font-semibold md:py-15 sm:py-5">Our Running Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    campaigns.map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)
                }
            </div>
        </div>
    );
};

export default RunningCampaign;
