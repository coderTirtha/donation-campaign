import { Link } from "react-router-dom";

const HomeDonationCard = ({ donation }) => {
    const { id, category, title, image, card_bg_color, category_bg_color, text_color } = donation;
    return (
        <div>
            <Link to={`/donationDetails/${id}`}>
                <div className="card shadow-sm cursor-pointer flex flex-col justify-between" style={{ backgroundColor: `${card_bg_color}` }}>
                    <figure><img src={image} alt="food" className="w-full h-[150px] object-cover" /></figure>
                    <div className="p-4 flex flex-col justify-between space-y-2">
                        <div>
                            <p className="badge border-0 rounded p-3 font-bold" style={{ backgroundColor: `${category_bg_color}`, color: `${text_color}` }}>{category}</p>
                        </div>
                        <h2 className="card-title" style={{ color: `${text_color}` }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeDonationCard;