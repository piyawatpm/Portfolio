type ContactProps = {
  contactAnimate: boolean;
};
function Contact({ contactAnimate }: ContactProps) {
  return (
    <section id="contact" className="  bg-[#252934]  pb-[200px] ">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="svgcolor-light bt-[#252934] text-white mb-32"
        width="100%"
        height="75"
      >
        <path d="M 0 0 L 50 100 L 100 0 Z" fill="white" stroke="white" />
      </svg>

      <div className=" mt-7 flex-col flex items-center text-center relative  w-full px-3">
        <div
          className={`  opacity-0 ${
            contactAnimate && "animate-slideInLeft"
          } font-Raleway-Bold text-3xl md:text-4xl text-white`}
        >
          CONTACT
        </div>
        <div
          className={`${
            contactAnimate && "animate-slideInRight"
          } opacity-0 bg-white h-1 w-[70px] mt-[25px] mb-[40px] delay25`}
        ></div>
        <h1
          className={`${
            contactAnimate && "animate-slideInRight"
          } text-[#04c2c9] font-bold text-base delay50 opacity-0`}
        >
          Have a question or want to work together?
        </h1>

        <div
          className={`${
            contactAnimate && " animate-popIn"
          }  delay50 opacity-0 flex flex-col justify-between min-w-[100%] md:min-w-[500px] mt-4`}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className=" text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
          />
          <textarea
            rows={4}
            className="text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"
            placeholder="Your Message"
            defaultValue={""}
          />

          <button className=" ml-auto mt-3 max-w-fit cursor-pointer transition-color duration-500 text-lg bg-transparent hover:bg-[#04c2c9] text-white  hover:text-white p-2 px-4 border-2 border-solid border-[#fff] hover:border-transparent">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
