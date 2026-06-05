import meeting1 from "../assets/meeting1.png";

function About() {
    return (
        <section className=" relative max-w-7xl mx-auto px-6 py-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-20">

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                    <div className="w-80 h-80 bg-pink-200 rounded-full blur-[120px] opacity-60"></div>
                </div>
                {/* Left */}

                <div className="max-w-[520px]">
                    <h2
                        className="text-[42px] md:text-[60px] leading-[1.1]"
                        style={{ fontFamily: "Questrial" }}
                    >
                        Tomorrow should
                        <br />
                        be better than{" "}
                        <span className="bg-green-100 rounded-full px-3">
                            today
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-600 text-sm leading-7">
                        We are a team of strategists,
                        designers, communicators and
                        researchers. Together, we believe
                        that progress only happens when
                        you refuse to play things safe.
                    </p>

                    <button className="mt-8 text-sm flex items-center gap-3">
                        Read more
                        <span className="w-20 h-[1px] bg-black"></span>
                    </button>
                </div>

                {/* Right */}

                <div>
                    <img
                        src={meeting1}
                        alt=""
                        className="w-[360px] md:w-[420px] rounded-full"
                    />
                </div>

            </div>
        </section>
    );
}

export default About;