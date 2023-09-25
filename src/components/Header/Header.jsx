import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="flex-1">
                    <img src={`https://i.ibb.co/0mGNyPB/Logo.png`} alt="" className="w-[150px]" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={'/donation'}>Donation</NavLink></li>
                        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;