import { Link } from "react-router-dom";


const ButtomLeft = () => {
    return (
        <div className="flex gap-4 font-semibold">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>

        </div>
    );
};

export default ButtomLeft;