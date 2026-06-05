import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import person4 from "../assets/images/person4.png";
import person5 from "../assets/images/person5.png";
import person6 from "../assets/images/person6.png";

function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-24">

      {/* Heading */}

      <div className="text-center">

        <h1
          className="
          font-light
          text-[40px]
sm:text-[56px]
md:text-[72px]
lg:text-[88px]
xl:text-[96px]
          
          leading-[1]
          tracking-tight
          "
          style={{ fontFamily: "Questrial, sans-serif" }}
        >
          The{" "}
          <span className="relative">
            thinkers
            <span className="absolute left-0 bottom-2 w-full h-[4px] bg-yellow-300 rotate-[-3deg]"></span>
          </span>{" "}
          and
          <br />
          doers were{" "}
          <span className="bg-pink-200 rounded-full px-4">
            changing
          </span>
          <br />
          the{" "}
          <span className="bg-green-100 rounded-full px-4">
            status
          </span>{" "}
          Quo with
        </h1>

       <p className="max-w-xl mx-auto mt-6 text-gray-600 text-sm md:text-base px-4">
          We are a team of strategists, designers,
          communicators, researchers. Together,
          we believe that progress only happens
          when you refuse to play things safe.
        </p>
      </div>

      {/* People */}

      <div className="mt-20 flex justify-center items-end gap-8 flex-wrap">

        <img
          src={person1}
          className="w-24 h-24 rounded-full object-cover mt-10"
        />

        <img
          src={person2}
          className="w-24 h-24 rounded-full object-cover -mt-8"
        />

        <img
          src={person3}
          className="w-24 h-24 rounded-full object-cover mt-12"
        />

        <img
          src={person4}
          className="w-24 h-24 rounded-full object-cover -mt-6"
        />

        <img
          src={person5}
          className="w-24 h-24 rounded-full object-cover mt-8"
        />

        <img
          src={person6}
          className="w-24 h-24 rounded-full object-cover"
        />

      </div>

    </section>
  );
}

export default Hero;
