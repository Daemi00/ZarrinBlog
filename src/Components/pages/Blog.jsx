import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
const posts = [
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

const Blog = () => {
  const navigate = useNavigate();

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
    <main className="min-h-screen bg-white w-full">
      <section className="max-w-7xl mx-auto w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-[5rem]">
          <span className="block text-primary-400 font-semibold uppercase tracking-widest mb-4 text-xs sm:text-sm">
            Our Blogs
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find our all blogs from here
          </h1>
          <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg mb-6">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>

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
                <span className="text-xs text-gray-500  font-normal">
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600  text-sm sm:text-base mb-4">
                {post.desc}
              </p>
              <Button
                  className="text-[#7C4EE4] font-semibold underline underline-offset-2 hover:text-primary-700 transition-colors duration-200 text-base text-left w-max"
                  onClick={() => navigate("/blog/1")}
                  text="Read More..."
                />


            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
