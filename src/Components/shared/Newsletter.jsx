import React, { useState } from "react";

const Newsletter = () => {
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
    <section className="relative bg-[#7c4ee4] w-full flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
        <h2 className="text-white font-bold text-center mb-8 text-[clamp(1.5rem,5vw,2.5rem)] leading-[1.2]">
          Get our stories delivered <br /> from us to your inbox weekly.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center w-full gap-4 mb-4"
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-1 px-6 py-3 rounded-md bg-white text-primary-700 placeholder:text-gray-400 shadow-sm focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-md border border-white text-white font-semibold bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
          >
            Get started
          </button>
        </form>

        {toast.show && (
          <div
            className={`fixed bottom-8 z-50 px-6 py-3 rounded-xl shadow-2xl text-white font-semibold flex items-center gap-2 sm:left-1/2 sm:translate-x-[-50%] sm:w-[90vw] sm:max-w-xs animate-slide-in-out ${
              toast.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  toast.type === "error"
                    ? "M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                    : "M5 13l4 4L19 7"
                }
              />
            </svg>
            {toast.message}
          </div>
        )}

        <p className="text-white text-center text-xs sm:text-sm max-w-lg">
          Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
