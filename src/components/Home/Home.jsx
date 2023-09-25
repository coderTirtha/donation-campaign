import { useLoaderData } from "react-router-dom";
import HomeDonationCard from "../HomeDonationCard/HomeDonationCard";

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            <div className="flex justify-center items-center bg-hero-pattern bg-blend-screen bg-cover object-cover bg-center rounded">
                <div className="py-24 flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-4xl font-bold text-center">I Grow By Helping People In Need</h1>
                    <div className="join">
                        <input className="input input-bordered join-item" placeholder="Search here ..." />
                        <button className="btn join-item btn-error">Search</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                {
                    donations.map(donation => <HomeDonationCard key={donation.id} donation={donation}></HomeDonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;