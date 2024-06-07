import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/about.css";


function About() {
  return (
    <>
   <Navbar/>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">What is Lorem Ipsum?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/721/193/original/washing-machine-and-laundry-laundry-sticker-png.png"
            alt="Laundry Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mt-8">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/721/337/original/laundry-basket-clean-clothes-cleaning-chores-housework-laundry-concept-png.png"
            alt="Achievements Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">Why do we use it?</h2>
          <p className="text-lg leading-relaxed mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>

      <div className=" p-3 text-center">
        <h2 className="text-2xl font-bold mb-2">Our Promise</h2>
      </div>
      <div className="image-container">
  <div className="image-box">
    <img
      src="https://us.123rf.com/450wm/jertam2020/jertam20202110/jertam2020211000029/175480268-business-man-woman-group-successful-business-people-team-characters-standing-gesturing-business-team.jpg?ver=6"
      alt="laundry store" 
    />
    <p className="text-center p-2 font-bold text-blue-500">Expert professionals</p>
  </div>
  <div className="image-box">
    <img
      src="https://www.eastcoastdaily.in/wp-content/uploads/2019/10/food.jpg"
      alt="laundry store"
    />
    <p className="text-center p-2 font-bold text-blue-500">Fast Pickup-Delivery</p>
  </div>
  <div className="image-box">
    <img
      src="https://coamplifi.com/wp-content/uploads/2022/02/coamplifi_transparency.jpg"
      alt="laundry store"
    />
    <p className="text-center p-2 font-bold text-blue-500">Transparency</p>
  </div>
</div>

<div className="p-4 ">
  <h2 className="text-2xl font-bold mb-2 text-center p-2">Our Achievements</h2>
  <div className="flex flex-wrap justify-center w-full  p-3 pl-9">
    <div className="md:w-1/3 xl:w-1/3 p-4 mb-4 ">
      <ul className="list-none">
        <li className="mb-2 flex items-center">
          <span className="text-3xl font-bold mr-2 text-green-400">100+</span>
          <span className="text-lg">outlets in India</span>
        </li>
      </ul>
    </div>
    <div className="md:w-1/3 xl:w-1/3 p-4 mb-4">
      <ul className="list-none">
        <li className="mb-2 flex items-center">
          <span className="text-3xl font-bold mr-2 text-green-400">15Lakh+</span>
          <span className="text-lg">orders</span>
        </li>
      </ul>
    </div>
    <div className="md:w-1/3 xl:w-1/3 p-4 mb-4">
      <ul className="list-none">
        <li className="mb-2 flex items-center">
          <span className="text-3xl font-bold mr-2 text-green-400">60+</span>
          <span className="text-lg">cities</span>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
