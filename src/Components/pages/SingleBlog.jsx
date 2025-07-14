
import { useNavigate } from "react-router-dom";

import Button from "../shared/Button";

const popularPosts = [
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

const SingleBlog = () => {
  const navigate = useNavigate();
 
  return (
    <main className="flex-1 w-full bg-white ">
      <div className="max-w-4xl mx-auto w-full px-4 pt-8 pb-2 text-xs text-gray-500 font-medium">
        <span
          className="text-primary-600 cursor-pointer"
          onClick={() => navigate("/blog")}
        >
          Blog
        </span>
        <span className="mx-">/</span>
        <span className="text-black mx-3">DEVELOPMENT</span>
        <span className=" text-gray-500">
                  16 March 2023
                </span>
      </div>
      {/*Blog Title */}
      <div className="max-w-4xl mx-auto w-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2 leading-tight">
          How to make a Game look more attractive with New VR &AI Technology
        </h1>
      </div>

      {/*featured image */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8">
        <img
          src={require("../Assets/Images/VRAI.png")}
          alt="VRAI"
          className="w-full rounded-2xl object-cover h-[320px] sm:h-[400px] md:h-[440px] lg:h-[420px] mb-6"
        />
      </div>
      {/* Blog Content */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8 text-gray-700 text-base leading-relaxed">
        <p className="mb-6">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it's
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we're committed to
          making AI accessible to everyone.
        </p>
        <p className="mb-6">
          We're now at a pivotal moment in our AI journey. Breakthroughs in
          generative AI are fundamentally changing how people interact with
          technology — and at Google, we've been responsibly developing large
          language models so we can safely bring them to our products. Today,
          we're excited to share our early progress. Developers and businesses
          can now try new APIs and products that make it easy, safe and scalable
          to start building with Google's best AI models through Google Cloud
          and a new prototyping environment called MakerSuite. And in Google
          Workspace, we're introducing new features that help people harness the
          power of generative AI to create, connect and collaborate.
        </p>
        {/* Quote */}
        <blockquote className="border-l-4 border-[#7c4ee4]  pl-4 mb-2">
          <span className="block text-lg italic font-normal text-primary-700 ">
            "People worry that computers will get too smart and take over the
            world, but the real problem is that they're too stupid and they've
            already taken over the world."
          </span>
        </blockquote>
        <div className="pl-6 mb-6">
          <span className="block text-xs font-bold text-gray-500 italic">
            — Pedro Domingos
          </span>
        </div>

        <p className="mb-6">
          More than 3 billion people already benefit from AI-powered features in
          Google Workspace, whether it's using Smart Compose in Gmail or
          auto-generated summaries in Google Docs. Now, we're excited to take
          the next step and bring a limited set of trusted testers a new set of
          features that makes the process of writing even easier. In Gmail and
          Google Docs, you can simply type in a topic you'd like to write about,
          and a draft will be instantly generated for you. So if you're a
          manager onboarding a new employee, Workspace saves you the time and
          effort involved in writing that first welcome email. From there, you
          can elaborate upon or abbreviate the message or adjust the tone to be
          more playful or professional — all in just a few clicks. We'll be
          rolling out these new experiences to testers in the coming weeks.
        </p>
      </div>
      {/* Secondary Image */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-8">
        <img
          src={require("../Assets/Images/VRDRIVE.png")}
          alt="VR Steering"
          className="w-full rounded-2xl object-cover h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] mb-2"
        />
      </div>
      <div className="max-w-4xl mx-auto w-full px-4 mb-12 text-gray-700 text-base leading-relaxed">
        <p>
          We're so excited by the potential of generative AI, and the
          opportunities it will unlock — from helping people express themselves
          creatively, to helping developers build brand new types of
          applications, to transforming how businesses and governments engage
          their customers and constituents. Stay tuned for more to come in the
          weeks and months ahead.
        </p>
      </div>
      {/* Popular Post Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 mb-20 mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ">
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
                className="mt-2 w-max px-6 py-2 rounded-lg  text-[#7c4ee4] border border-[#7c4ee4]"
                text="Read more"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
