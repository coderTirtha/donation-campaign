import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <div className="flex justify-center items-center h-[85vh]">
                    <p className="flex justify-center items-center gap-4 text-2xl">Loading <span className="loading loading-spinner loading-lg"></span></p>
                </div> :
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Root;