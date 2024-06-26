import React from "react";

import bg from "../assets/WhatsApp Image 2023-09-17 at 3.12.02 PM.jpeg";
import leftimg from "../assets/High Five transition for the latest project.gif";
import rightimg from "../assets/back-left-4.jpeg";
import ChatBox from "../components/ChatBox";

import gif from "../assets/Deep Breathing Animation.gif";
import Graph from "../assets/graph.jpeg";
import GoogleImg from "../assets/google-data.jpeg";
import Fundind from "../assets/funding data.png";

import { Link } from "react-router-dom";
import BarCharts from "../components/BarChart";
import LineCharts from "../components/LineChart";
import PieCharts from "../components/PieChart";

const Home = ({ isLoggedIn }) => {
  return (
    <div>
      <div className="relative ml-72">
        <img src={bg} className="w-[900px]" />
        <div className="absolute  ">
          <h1 className="text-black font-serif font-bold text-[40px] left-[100px] top-[-550px] relative">
            Unlock the Power of Telemedicine Wisdom
          </h1>
          <br></br>
          <h1 className="text-black text-center font-bold text-[25px] left-[100px] top-[-550px] relative">
            Your Personalized Ayurvedic Healthcare Companion
          </h1>
          <Link to="https://ayurtech.streamlit.app/" target="_blank">
            <button
              className=" bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[150px]"
            >
              Browse Herbs
            </button>
          </Link>
          <Link to="https://sehat-commitandpush.netlify.app" target="_blank">
            <button
              className=" bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[200px]"
            >
              Get Your Checkup Done
            </button>
          </Link>

          <Link
            to="https://sfu.mirotalk.com/join/70797BrownGhost"
            target="_blank"
          >
            <button
              className="mx-2 bg-richblack-800 text-white text-bold py-[10px] 
                    px-[18px] rounded-[8px] border border-richblack-700 relative top-[-500px] left-[250px]"
            >
              Create Meeting
            </button>
          </Link>
        </div>
      </div>

      {/* chart */}
      {/* <LineCharts /> */}

      {/* Bar Chart */}
      <div className="w-full h-full flex flex-col items-center justify-center py-10">
        <p className="text-3xl font-bold text-zinc-400">
          Vacancies (in %) of specialists in CHCs{" "}
        </p>
        <BarCharts />
        <p className="font-bold text-green-700">
          Source: Ministry of Health and Family Welfare
        </p>
      </div>

      {/* Pie chart */}
      <p className="text-3xl text-center font-bold text-zinc-400 pt-5">
        {" "}
        Availiblity ratio to the Requirement{" "}
      </p>
      <div className="w-full h-full flex items-center justify-center py-10">
        <div className="flex">
          <div className="pt-10">
            <p className="text-2xl text-center">Rural CHC</p>
            <PieCharts
              data={[
                { id: 0, value: 1804, label: "availible" },
                { id: 1, value: 25140, label: "min req" },
              ]}
            />
          </div>

          <div className="pt-10">
            {" "}
            <p className="text-2xl text-center">Rular PHC</p>
            <PieCharts
              data={[
                { id: 0, value: 17519, label: "availible" },
                { id: 1, value: 21924, label: "min req" },
              ]}
            />
          </div>
        </div>
        <img src={Graph} width={600} />
      </div>
      {/* Government scheme */}
      <div className="w-full flex justify-center">
        <a className=" p-3 bg-black text-white rounded-lg w-fit" href="https://www.nhp.gov.in/">
          Government Schemes
        </a>
      </div>

      {/* Example */}
      <div className="flex w-full items-center justify-center px-10 mt-10">
        <div className=" text-center font-bold text-zinc-800 pt-5">
          <p className="text-green-900 text-[40px]">Funding News:</p>
          <p className="text-[25px]">Mohalla Clinics of Delhi, India </p>
          <p className="font-normal text-[25px]">
            The mohalla or community clinics in Delhi, India aims to provide
            basic health services to underserved population in urban settings.
            Out of the total budget,{" "}
            <span className="font-bold">Rs 6,215 crore</span> has been proposed
            for hospitals to maintain world-class facilities.{" "}
            <span className="font-bold">Rs 212 crore</span> has been set aside
            for mohalla clinics, and{" "}
            <span className="font-bold">Rs 194 crore</span> has been allocated
            to purchasing new ambulances for the Centralised Accident and Trauma
            Services.
          </p>
        </div>
        <img src={Fundind} width={1000} />
      </div>

      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-14 ">
        {/* <!--left part--> */}
        <div className="space-y-2 ml-14">
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">
            Get Started Today
          </h1>
          <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
              "Sehat" is dedicated to revolutionizing healthcare accessibility
              for remote and underserved communities through innovative
              telemedicine solutions. Our mission is to bridge the gap in
              healthcare delivery by leveraging cutting-edge technology to
              provide timely medical consultations and diagnoses, reducing the
              need for physical travel to healthcare facilities.
            </p>
            <br />
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
              Are you tired of navigating through numerous Ayurvedic texts and
              sifting through complex terminology? With our software, you can
              leave the cumbersome research to us. We've combined the power of
              Natural Language Processing (NLP) and machine learning to make
              Ayurveda accessible and practical. No more confusion, just clarity
              in your healthcare decisions.
            </p>
          </div>
        </div>
        {/* <!--right part--> */}
        <img
          src={gif}
          alt=""
          className="w-full max-w-[550px] relative mr-14 rounded-full"
        />
      </div>

      <section className="relative bg-gray-300 w-full mt-10 ">
        <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
          <div className="space-y-8 ">
            <div clclassNameass="flex felx-col gap-10 mx-auto">
              <p className="font-mullish font-semibold text-[30px] leading-[1.2] text-black">
                Ayurveda is not just about treating diseases; it is about
                creating harmony in body, mind, and spirit." - Dr Vasant Lad
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-20 ">
        {/* <!--right part--> */}
        <img
          src={rightimg}
          alt=""
          className="w-full max-w-[580px] relative ml-14 rounded-full"
        />

        {/* <!--left part--> */}
        <div className="space-y-2 ml-8">
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">
            How It Works?
          </h1>
          <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
              Our Ayurvedic Formulation Recommendation Software is a
              sophisticated blend of ancient wisdom and state-of-the-art
              technology, meticulously designed to simplify your journey to
              optimal health. The process commences with user authentication,
              ensuring a secure and trusted environment for your health
              exploration. Next, you input comprehensive patient information,
              including your psychosomatic constitution, age, clinical
              condition, comorbidities, and symptoms. This data forms the basis
              for our personalized recommendations. The culmination of this
              process is the presentation of carefully curated Ayurvedic
              formulations designed to meet your wellness needs. But our
              commitment to empowering you with knowledge doesn't end there.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-green-800">
        <div class="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
          <p class="text-white text-center text-sm">
            <span class="text-[55px] font-bold text-white">80%+</span> <br />{" "}
            reduction in average <br />
            time to first response{" "}
          </p>
          <p class="text-white text-center text-sm">
            <span class="text-[55px] font-bold text-white">1,002%</span> <br />
            increase in total social
            <br />
            engagements
          </p>
          <p class="text-white text-center text-sm">
            <span class="text-[55px] font-bold text-white">2X</span> <br />{" "}
            increase in average <br />
            client retainer
          </p>
        </div>
      </div>

      <div className="flex  sm:flex-col lg:flex-row justify-between items-center py-20 ">
        {/* <!--left part--> */}
        <div className="space-y-2 ml-12">
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black">
            Why Choose Us
          </h1>
          <div className="">
            <p className="font-mullish text-[22px] leading-7 text-black opacity-70 ">
              Our software understands that no two individuals are the same.
              Your health journey is unique, and we respect that. When you get
              started, you'll have the opportunity to input your specific
              details, from your psychosomatic constitution to your age,
              clinical condition, and symptoms. This information forms the
              foundation of your personalized recommendations.
            </p>
          </div>
        </div>
        {/* <!--right part--> */}
        <img
          src={leftimg}
          alt=""
          className="w-full max-w-[450px] relative mr-12 rounded-full"
        />
      </div>

      <section className="relative bg-gray-300 w-full mt-6 ">
        <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto py-16 ">
          <div className="space-y-8 ">
            <div clclassNameass="flex felx-col gap-10 mx-auto">
              <p className="font-mullish font-semibold text-[30px] leading-[1.2] text-black">
                Ayurveda is not just about treating diseases; it is about
                creating harmony in body, mind, and spirit." - Dr Vasant Lad
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-black m-4 relative left-[600px]">
        Customized Chat Bot
      </h1>
      <ChatBox />
    </div>
  );
};

export default Home;
