import Heading from "../../../Components/Title/Heading";
import CardWhyChooseUs from "./CardWhyChooseUs";

const WhyChooseUs = () => {
  const datas = [
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
    },
// https://i.ibb.co/WtfCxVn/affordable.jpg
// https://i.ibb.co/NjvYKnh/flexible.webp
  ]

  return (
    <section className="py-12 pb-40 bg-[#F7F9FA] px-3">
      <div className="">
        <div className="container mx-auto">
          <Heading
            heading={"Why Choose Us?"}
          ></Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {
              datas?.map((data, index) =>
                <CardWhyChooseUs key={index} data={data}></CardWhyChooseUs>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
