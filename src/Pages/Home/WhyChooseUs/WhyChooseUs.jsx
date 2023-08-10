import CardWhyChooseUs from "./CardWhyChooseUs";

const WhyChooseUs = () => {
  const datas = [
    {
      title: "Transparent",
      details: "We believe in openness and honesty in all our interactions, ensuring you are always informed.",
    },
    {
      title: "Proactive",
      details: "Our team takes proactive measures to anticipate your needs and provide solutions ahead of time."
    },
    {
      title: "Affordable",
      details: "Quality services at prices that won't break the bank, making excellence accessible."
    },
    {
      title: "Flexible",
      details: "  We adapt to your unique requirements, offering flexibility to tailor solutions that fit your needs."
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {
            datas?.map((data, index) =>
                <CardWhyChooseUs key={index} data={data}></CardWhyChooseUs>
            )
          }

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
