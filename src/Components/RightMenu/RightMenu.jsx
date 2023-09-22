import React from 'react';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

const RightMenu = () => {
    return (
        <div className="z-50 fixed top-72 right-0 text-white">
            <Link to="dashboard/nexus-customer-service-portal" className="flex items-center ">
                <div className="lg:tooltip" data-tip="Support">
                    <div className="bg-[#1E3A8A] p-4 cursor-pointer">
                        <SupportAgentIcon/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RightMenu;
