import { FaMapMarkerAlt,FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";


const MiddleTop = () => {
    return (
        <div className="pl-4 pr-8 flex justify-between items-center py-2 border-b-2">
            <div className="flex gap-2  items-center">
                <FaMapMarkerAlt/>
                <p>Dhaka,Bangladesh</p>
            </div>
            <div className="flex gap-4">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
            </div>
        </div>
    );
};

export default MiddleTop;