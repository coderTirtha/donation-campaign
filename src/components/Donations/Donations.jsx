import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utilities/localstorage";
import Donation from "../Donation/Donation";
import { useEffect, useState } from "react";

const Donations = () => {
    const [donation, setDonation] = useState([]);
    const [donationLength, setDonationLength] = useState(4);
    const donations = useLoaderData();
    useEffect(() => {
        const donated = getStoredDonations();
        if (donated.length > 0) {
            const donationsDone = donations.filter(donation => donated.includes(donation.id));
            setDonation(donationsDone);
        } else {
            setDonation([]);
        }
    }, [])
    return (
        <div>

            {
                (donation.length === 0) ?
                    <div className="flex justify-center h-[50vh] items-center">
                        <p className="text-lg text-gray-400">No donations here yet!</p>
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        {
                            donation.slice(0, donationLength).map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                        }
                    </div>
            }
            <div className={donationLength === donation.length || donation.length <= 4 ? 'hidden' : 'flex justify-center'}>
                <button className="btn btn-success text-white my-4" onClick={() => setDonationLength(donation.length)}>See All</button>
            </div>
        </div>
    );
};

export default Donations;