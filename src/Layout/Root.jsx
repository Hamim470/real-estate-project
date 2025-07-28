import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="font-poppins flex flex-col">
            <Nav></Nav>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;