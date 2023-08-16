

const CardWhyChooseUs = ({ data }) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 hover:bg-blue-100">
            
            <div className="flex gap-2 items-center">
                <img className="w-12 h-12 rounded-full p-1 nav-btn" src={data?.img} alt="" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{data?.title}</h3>
            </div>
            <p className="text-gray-600">{data?.details}</p>
        </div>
    );
};

export default CardWhyChooseUs;