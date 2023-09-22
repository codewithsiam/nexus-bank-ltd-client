import { BiPhoneCall } from "react-icons/bi";
import { GrCompliance } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


const MiddleTop = () => {
    return (
        <div className="pl-4 pr-8 flex justify-between items-center py-2 border-b-2">
            <div className="flex gap-2  items-center">
                <BiPhoneCall className="font-bold text-lg"/>
                <Link to="">19625 | +8809068261960</Link>
            </div>
            <div className="flex gap-4">
                <Link to="/nexus-customer-service-portal"
                className="flex gap-2 items-center text-sm hover:text-primary">
                    <RiCustomerService2Fill className="font-bold text-lg"/> Customer Service Portal
                </Link>
                {/* <Link to=""
                className="flex gap-2 items-center text-sm hover:text-primary">
                    <GrCompliance className="font-bold text-lg hover:text-primary"/> Customer Complaint
                </Link> */}
            </div>
        </div>
    );
};

export default MiddleTop;