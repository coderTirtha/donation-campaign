import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../../utilities/localstorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const params = useParams();
    const selectedDonation = donations.find(donation => donation.id === params.id);
    const { id, image, title, price, text_color, description } = selectedDonation;
    const handleDonation = (id) => {
        saveDonations(id);
    }
    return (
        <div>
            <div className="relative flex flex-col justify-center">
                <img src={image} alt="" className="w-full md:w-2/3 lg:w-1/2 mx-auto" />
                <div className="absolute bottom-0 w-full md:w-2/3 lg:w-1/2 md:left-32 lg:left-1/4">
                    <div className="bg-black bg-opacity-40 p-2">
                        <button onClick={() => handleDonation(id)} className="btn text-white border-0" style={{ backgroundColor: `${text_color}` }}>Donate ${price}</button>
                    </div>
                </div>
            </div>
            <div className="space-y-4 my-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;