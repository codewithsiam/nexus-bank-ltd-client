

import ButtomLeft from "./ButtomLeft";
import ButtomRight from "./ButtomRight";


const MiddleButtom = () => {
    return (
        <div className="flex justify-between items-center pr-6 mt-6">
            <ButtomLeft/>
            <ButtomRight/>
        </div>
    );
};

export default MiddleButtom;