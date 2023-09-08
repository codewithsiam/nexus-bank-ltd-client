import CenterTitle from "../../../../../Components/Title/CenterTitle";

const WhyChooseUs = () => {
  const chooseData = [
    {
      title: "Transparent",
      img:"https://i.ibb.co/sWBkx2H/transperant.webp",
      details: "We believe in openness and honesty in all our interactions, ensuring you are always informed.",
    },
    {
      title: "Proactive",
      img:"https://i.ibb.co/rMJXm6Z/proactive.jpg",
      details: "Our team takes proactive measures to anticipate your needs and provide solutions ahead of time."
    },
    {
      title: "Affordable",
      img: "https://i.ibb.co/wpWq2y1/affordable.jpg",
      details: "Quality services at prices that won't break the bank, making excellence accessible."
    },
    {
      title: "Flexible",
      img:"https://i.ibb.co/nBc7Ntx/flexible.jpg",
      details: "  We adapt to your unique requirements, offering flexibility to tailor solutions that fit your needs."
    }
  ]

  return (
    <section className="py-12">
      <div className="">
        <div className="container mx-auto">
          <CenterTitle heading={"Why Choose Us?"} ></CenterTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              chooseData?.map((data, index) =>
                <CardWhyChooseUs key={index} data={data}></CardWhyChooseUs>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
};

const CardWhyChooseUs = ({ data }) => {
  return (
      <div className="bg-white rounded-lg p-8 shadow-md transform transition-transform hover:scale-105 hover:bg-blue-100">
          
          <div className="flex gap-2 items-center">
              <img className="w-12 h-12 rounded-full p-1 my-btn" src={data?.img} alt="" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{data?.title}</h3>
          </div>
          <p className="text-gray-600">{data?.details}</p>
      </div>
  );
};

export default WhyChooseUs;
