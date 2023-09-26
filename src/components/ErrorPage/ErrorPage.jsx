import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] space-y-4">
            <h1 className="text-7xl font-bold">404</h1>
            <h2 className="text-3xl font-semibold text-gray-500">Page not Found!</h2>
            <p className="text-gray-400">The page you are trying to access, may has been deleted or moved to another directory!</p>
            <Link to={'/'}><button className="btn">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;