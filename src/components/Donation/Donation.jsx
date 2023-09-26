import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    const { id, image, category, price, title, card_bg_color, text_color, category_bg_color } = donation;
    return (
        <div className="flex gap-4 rounded" style={{ backgroundColor: `${card_bg_color}` }}>
            <figure className="w-1/3"><img src={image} alt="" className="object-cover w-full h-[180px]" /></figure>
            <div className="w-2/3 flex-1 py-4 flex justify-between flex-col">
                <div className="badge rounded p-3" style={{ backgroundColor: `${category_bg_color}` }}>
                    <p className="font-semibold" style={{ color: `${text_color}` }}>{category}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg font-semibold" style={{ color: `${text_color}` }}>${price}</p>
                </div>
                <Link to={`/donationDetails/${id}`}><button className="btn btn-sm text-white" style={{ backgroundColor: `${text_color}` }}>View Details</button></Link>
            </div>
        </div>
    );
};

export default Donation;