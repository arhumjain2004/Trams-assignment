import person4 from "../assets/images/person4.png";

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 text-center">

      {/* Heading */}
      <h2
        className="text-[48px] md:text-[72px] leading-none"
        style={{ fontFamily: "Questrial" }}
      >
        <span className="bg-green-100 px-3 py-1 rounded-full">
          What
        </span>{" "}
        our customer
        <br />
        says{" "}
        <span className="relative inline-block">
          About Us
          <span className="absolute left-0 bottom-1 w-full h-[4px] bg-yellow-300 -z-10"></span>
        </span>
      </h2>

      {/* Testimonial Card */}
      <div className=" relative mt-16 bg-[#eef1ec] rounded-[40px] max-w-2xl mx-auto p-10 text-center">

        {/* Opening Quote */}
     

        <p className="text-gray-700 leading-8">
          Elementum delivered the site within the timeline as they
          requested. In the end, the client found a 50% increase
          in traffic with no downtime. They also had an impressive
          ability to use technologies that the company hadn't used,
          which have also proved to be easy to use and reliable.
        </p>

        {/* Closing Quote */}


        {/* Avatar */}
        <div className="mt-8 flex justify-center">
          <img
            src={person4}
            alt="Customer"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Testimonials;