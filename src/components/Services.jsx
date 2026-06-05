const services = [
  {
    title: "Collaborative & partnership",
    subtitle: "Office of multiple interest content",
  },
  {
    title: "We talk about our weight",
    subtitle: "The hanger US Air force digital experimental",
  },
  {
    title: "Piloting digital confidence",
    subtitle: "Delta faucet content, social, digital",
  },
];

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <h2
        className="text-[38px] md:text-[72px] leading-none mb-20"
        style={{ fontFamily: "Questrial" }}
      >
        What we <span className="bg-green-100 px-3 rounded-full">can</span>
        <br />
        <span className="relative inline-block">
        offer
        <span className="absolute left-0 bottom-2 w-full h-[4px] bg-yellow-300"></span>
</span>{" "}
you!
      </h2>

      <div className="border-t border-gray-300">

        {services.map((service, index) => (
          <div
            key={index}
            className="
            grid
            md:grid-cols-[250px_1fr_50px]
            items-center
            py-8
            border-b
            border-gray-300
            hover:bg-gray-50
            transition
            "
          >
            <p className="text-sm text-gray-500">
              {service.subtitle}
            </p>

            <h3
              className="text-2xl md:text-4xl"
              style={{ fontFamily: "Questrial" }}
            >
              {service.title}
            </h3>

            <span className="text-3xl">
              →
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;