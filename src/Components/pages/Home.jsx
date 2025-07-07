import React, { useState } from "react";
import Button from "../shared/Button";
import VRAI from "../Assets/Images/VRAI.png";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    image: require("../Assets/Images/travelling.png"),
    category: "Travel",
    date: "13 March 2023",
    title: "8 Rules Of Travelling In Sea You Need To Know ",
    desc: "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/portfolio.png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to build strong portfolio and get a Job in UI/UX",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/football.png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Professional Footballer in 2023",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/blog",
  },
];
const popularPosts = [
  {
    image: require("../Assets/Images/train.png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Train Or Bus Journey? Which one suits?",
    desc: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/website.png"),
    category: "Development",
    date: "11 March 2023",
    title: "Best Website to research for your next project",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/dancer.png"),
    category: "Sports",
    date: "10 March 2023",
    title: "How to Be a Dancer in 2023 with proper skills?",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/singer.png"),
    category: "Travel",
    date: "13 March 2023",
    title: "Who is the best singer on chart? Know him?",
    desc: "chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/business.png"),
    category: "Development",
    date: "11 March 2023",
    title: "How to start export import business from home?",
    desc: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
    link: "/blog",
  },
  {
    image: require("../Assets/Images/choco.png"),
    category: "Sports",
    date: "10 March 2023",
    title: "Make some drinks with chocolates chocolates and milk",
    desc: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    link: "/blog",
  },
];
const Home = () => {
  const navigate = useNavigate();
  // Newsletter local state
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
    <>
      {/*heroSection*/}
      <section className="bg-[#7c4ee4] py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-sm text-white font-semibold mb-10">
            Featured Post
          </p>
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            How AI will <br /> Change the Future
          </h1>
          <p className="text-white mb-6">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, homerobots will overcome navigation, direction.
          </p>
          <Button
            onClick={() => navigate("/blog/1")}
            className="bg-white rounded-lg font-semibold flex px-12 py-4 text-black"
            text="Read more"
          />
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1678491449021-762a7b999862?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="illustration"
            className="rounded-[10px] shadow-lg w-full"
          />
        </div>
      </section>

      {/*second section*/}
      <section className="relative flex justify-center items-center bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 mb-24 md:mb-32">
        <div className="max-w-6xl w-full mx-auto hidden md:block">
          <div className="relative w-full">
            <div className="rounded-3xl overflow-hidden w-full h-[220px] xs:h-[260px] sm:h-[320px] md:h-[440px] lg:h-[460px] bg-gray-200">
              <img
                src={VRAI}
                alt="VR/AI"
                className="object-cover w-full h-full"
              />
            </div>
            {/*Overlapping card*/}
            <div className="absolute right-0 bottom-0 translate-y-1/2 md:translate-y-1/3 md:w-[90%] lg:w-[65%] xl:w-[75%] bg-white rounded-3xl sm:p-8 overflow-hidden">
              <div className="flex items-center gap-4 text-sm text-gray-500  font-semibold mb-1">
                <span className="text-black font-bold">DEVELOPMENT</span>
                <span>16 March 2023</span>
              </div>
              <h2 className=" md:text-3xl font-bold text-gray-900 mb-2">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h2>
              <p className="text-xs sm:text-base mb-2 text-gray-600">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it's publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we're committed to making AI accessible to everyone.
              </p>
              <Button
                onClick={() => navigate("/blog/1")}
                className="mt-2 w-max px-6 py-2 rounded-lg  text-[#7c4ee4] border border-[#7c4ee4]"
                text="Read more"
              />
            </div>
          </div>
        </div>
      </section>

      {/*recent post */}
      <section className="pt-2 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 px-4 sm:px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Our Recent Post
            </h2>
            <Button
              className="bg-[#7c4ee4] text-white px-4 py-2 rounded"
              text="View All"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="rounded overflow-hidden bg-gray-200 ">
                <img src={VRAI} alt="VRAI" className="" />
              </div>
            </div>

            <div className="order-2 lg:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs sm:text-sm font-bold text-gray-900  uppercase tracking-wider">
                  DEVELOPMENT
                </span>
                <span className="text-xs sm:text-sm text-gray-500  font-normal">
                  16 March 2023
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl lg:text-2xl xl:text-4xl font-bold text-gray-900 leading-tight mb-2 lg:mb-2">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h3>
              <p className="text-sm sm:text-base lg:text-lg-[1.187rem] mb-2 lg:mb-2 leading-relaxed text-gray-600 ">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it's publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we're committed to making AI accessible to everyone.
              </p>
              <div>
                <Button
                  onClick={() => navigate("/blog/1")}
                  className="mt-2 w-max px-6 py-2 rounded-lg  text-[#7c4ee4] border border-[#7c4ee4]"
                  text="Read more"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* three blog section*/}

      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover rounded-2xl"
                  />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 font-normal">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {post.desc}
                </p>
                <Button
                  onClick={() => navigate("/blog/1")}
                  className="text-[#7C4EE4] font-semibold underline underline-offset-2 hover:text-primary-700 transition-colors duration-200 text-base text-left w-max"
                  text="Read More..."
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*popular post */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Popular Post
            </h2>
            <Button
              onClick={() => navigate("/blog/1")}
              className="bg-[#7c4ee4] text-white px-4 py-2 rounded"
              text="View All"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {popularPosts.map((post, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover rounded-2xl"
                  />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 font-normal">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {post.desc}
                </p>
                <Button
                  onClick={() => navigate("/blog/1")}
                  className="text-[#7C4EE4] font-semibold underline underline-offset-2 hover:text-primary-700 transition-colors duration-200 text-base text-left w-max"
                  text="Read More..."
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*newsletter section */}
      
    </>
  );
};

export default Home;
