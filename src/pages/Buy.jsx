import { Link, useLocation } from "react-router-dom";

const Buy = () => {
    const location=useLocation();
    return (
        <div className="">
            <h1>Buy</h1>
            <Link to={'/login'} state={location.pathname}>Login</Link>
        </div>
    );
};

export default Buy;