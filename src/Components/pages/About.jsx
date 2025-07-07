import React, { useState } from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  // Local state for About page newsletter form
 const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const validateEmail = (e) => /.+@.+\..+/.test(e);
  const handleSubmit = (e) => {
    e.preventDefault();
    let type = "success",
      message = "Subscribed successfully!";
    if (!email) {
      type = "error";
      message = "Email is required";
    } else if (!validateEmail(email)) {
      type = "error";
      message = "Invalid email";
    } else setEmail("");
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ ...toast, show: false }), 3000);
  };
  return (
    <main className="bg-white w-full min-h-screen">
      <section className="w-full pt-16 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
          <span className="text-gray-600 block font-semibold uppercase  mb-6 text-xs sm:text-sm">
            ABOUT US
          </span>
          <h1 className="text-[2rem] xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Creative Blog Writing and publishing site
          </h1>
          <p className="text-gray-500 text-base xs:text-sm sm:text-sm mb-12 max-w-5xl mx-auto leading-relaxed text-center">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empoerment,
          </p>
        </div>

        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
          <img
            src={require("../Assets/Images/AboutUs.png")}
            alt="Team"
            className="rounded-2xl object-cover w-full max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[32rem] shadow-lg"
          />
        </div>
      </section>

      <section className="w-full py-2 sm:py-6 lg:py-6 bg-gray-50 flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block text-xs sm:text-sm font-semibold text-gray-600 tracking-widest mb-2 uppercase text-left">
            HOW WE WORK
          </span>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 sm:mb-16 gap-6 lg:gap-8">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 leading-tight text-left">
                I will show you how <br /> our team works
              </h2>
            </div>
            <div className="flex-1 lg:max-w-md">
              <div className="mb-12"></div>
              <p
                className="text-gray-500  text-sm sm:text-base lg:text-sm 
             mb-32 text-left leading-relaxed"
              >
                Bring to the table win-win market strategies to ensure <br />{" "}
                perfect articles.
              </p>
            </div>
          </div>

          {/*three cards section */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-16 w-full justify-center">
            <div className="w-full lg:w-[600px] rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 text-white min-h-[120px] sm:min-h-[140px] flex flex-col bg-[#7c4ee4]">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 opacity-90">
                01
              </div>
              <h3 className="text-xl sm:text-xl font-bold mb-4">
                Brainstorming
              </h3>
              <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-4 flex-grow">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
              </p>
              <button
                type="button"
                onClick={() => navigate("/blog/1")}
                className="text-white font-bold underline underline-offset-4 decoration-2 rounded-md px-4 py-2 transition-all duration-200 border-none bg-transparent cursor-pointer text-sm sm:text-base text-left self-start hover:bg-white/10"
              >
                Learn More
              </button>
            </div>

            <div className="w-full lg:w-[600px] bg-white rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 min-h-[120px] sm:min-h-[140px] flex flex-col  border-gray-200 ">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-200">
                02
              </div>
              <h3 className="text-xl sm:text-xl font-bold mb-4 text-[#7f56d9]">
                Analysing
              </h3>

              <p className="text-gray-600 text-xs sm:text-base leading-relaxed flex-grow">Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line solely on the bottom line.</p>
            </div>

            <div className="w-full lg:w-[600px] bg-white rounded-xl p-4 sm:p-6 pb-3 lg:pb-6 min-h-[120px] sm:min-h-[140px] flex flex-col border-gray-200 ">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-200 ">
                03
              </div>
              <h3 className="text-xl sm:text-xl font-bold mb-4 text-[#7f56d9]">
                News Publishing
              </h3>
              <p className="text-gray-600 text-xs sm:text-base leading-relaxed flex-grow">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
