function Newsletter() {
  return (
    <section className="bg-[#dcead9] mt-32 py-20 px-6 text-center">

      <div className="max-w-4xl mx-auto">

        <h2
          className="text-[40px] md:text-[64px] leading-none"
          style={{ fontFamily: "Questrial" }}
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-6 text-gray-600">
          To make your stay special and even more memorable
        </p>

        <button
          className="
          mt-8
          bg-black
          text-white
          px-8
          py-3
          rounded-full
          hover:scale-105
          transition
          "
        >
          Subscribe Now
        </button>

      </div>

    </section>
  );
}

export default Newsletter;