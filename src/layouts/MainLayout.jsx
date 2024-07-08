import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-[#D2CEB2]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;