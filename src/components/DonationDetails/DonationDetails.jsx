import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donations = useLoaderData();
    const params = useParams();
    const selectedDonation = donations.find(donation => donation.id === params.id);
    const { id, image, title, price, text_color } = selectedDonation;
    return (
        <div>
            <div className="relative flex flex-col justify-center">
                <img src={image} alt="" className="w-full md:w-2/3 lg:w-1/2 mx-auto" />
                <div className="absolute bottom-0 w-full md:w-2/3 lg:w-1/2 md:left-32 lg:left-1/4">
                    <div className="bg-black bg-opacity-40 p-2">
                        <button className="btn text-white border-0" style={{ backgroundColor: `${text_color}` }}>Donate ${price}</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DonationDetails;