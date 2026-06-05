import meeting2 from "../assets/images/meeting2.png";

function Progress() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">

        <div>
          <img
            src={meeting2}
            alt=""
            className="w-[360px] md:w-[420px] rounded-full"
          />
        </div>

        <div className="max-w-md">
          <h2
            className="text-[42px] md:text-[60px] leading-[1.1]"
            style={{ fontFamily: "Questrial" }}
          >
            See how we can
            <br />
            help you progress
          </h2>

          <p className="mt-6 text-gray-600 text-sm leading-7">
            We add a layer of fearless insight and action
            that allows change makers to accelerate their
            progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <button className="mt-8 text-sm flex items-center gap-3">
            Read more
            <span className="w-20 h-[1px] bg-black"></span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Progress;