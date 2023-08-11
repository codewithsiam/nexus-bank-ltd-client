

const CardWhyChooseUs = ({ data }) => {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 hover:bg-blue-100">
            <div className="flex items-center justify-center w-16 h-16 bg-[#00ACCC] rounded-full mb-6">
                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{data?.title}</h3>
            <p className="text-gray-600">{data?.details}</p>
        </div>
    );
};

export default CardWhyChooseUs;