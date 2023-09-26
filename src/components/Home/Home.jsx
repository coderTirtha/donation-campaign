import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    const [donationsData, setDonationsData] = useState(donations);
    const handleSearch = () => {
        const category = document.getElementById('input').value.toLowerCase();
        document.getElementById('input').value = '';
        const filteredDonations = donations.filter(donation => donation.category.toLowerCase() === category);
        setDonationsData(filteredDonations);
    }
    return (
        <div>
            <div className="flex justify-center items-center bg-hero-pattern bg-blend-screen bg-cover object-cover bg-center rounded">
                <div className="py-32 flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h1>
                    <div className="flex gap-4 w-full justify-center">
                        <input id="input" type="text" className="input input-bordered md:w-full md:max-w-sm" placeholder="Search here by category ..." />
                        <button onClick={handleSearch} className="btn bg-[#FF444A] text-white hover:text-black border-0">Search</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {
                    donationsData.map(donation => <HomeDonationCard key={donation.id} donation={donation}></HomeDonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;