import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import ChatBot from "../Pages/Shared/ChatBot/ChatBot";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <ChatBot></ChatBot>
            <Footer/>
        </div>
    );
};

export default Main;