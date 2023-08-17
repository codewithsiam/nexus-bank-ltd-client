import { FaPhone, FaSistrix } from "react-icons/fa";

const ButtomRight = () => {
    return (
        <div className="flex items-center gap-2">
           <div className="bg-[#F6F6F9] p-4 mr-2  rounded-full hover:bg-[#0085A6] duration-300 cursor-pointer">
           <FaSistrix className="text-2xl "/>
           </div>
           <div className="bg-[#0085A6] p-4 rounded-full">
           <FaPhone className="text-xl text-white font-bold"/>
           </div>
 
            <div className="text-center hidden xl:block">
                <h3 className="text-xl">Requesting a Call</h3>
                <p className="text-xl font-semibold">0128554545</p>
            </div>
        </div>
    );
};

export default ButtomRight;