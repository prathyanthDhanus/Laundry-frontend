import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { productData } from "../utils/ProductData";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Use min-h-screen to ensure the content stretches to at least the height of the viewport */}
        <img
          className="w-full object-cover h-1/2 md:h-full"
          src="https://media.cnn.com/api/v1/images/stellar/prod/210915133905-how-to-do-laundry-lead.jpg?q=x_0,y_0,h_900,w_1601,c_fill"
          alt="Laundry"
        />
        <div className="flex flex-col items-center justify-center py-8 px-4 bg-blue-500 text-white md:py-16 md:px-8 m-20">
          <h1 className="text-4xl leading-tight font-bold">
            "Unlock the secret to free time. Start your laundry journey here."
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center py-3 text-blue-400">
          <h1 className="text-4xl leading-tight font-bold">OUR SERVICES</h1>
        </div>
        {productData.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 ">
            {productData.map((product, index) => (
              <Card
                key={index}
                imageUrl={product.image}
                title={product.title}
                description={product.description}
                buttonText={product.buttonText}
              />
            ))}
          </div>
        )}
      </div>
      {/* Position the image at the bottom of the screen */}
      <div className="">
        <img
          src="https://res.cloudinary.com/due7btgno/image/upload/v1712913845/j8odifi2xthv6sk6zhdf.png"
          alt="why laundry"
        />
      </div>
      {/*----- service section ------*/}
      <div className="flex flex-col items-center justify-center py-2 px-2 bg-blue-300 text-white md:py-1 md:px-2 m-5 rounded-3xl ">
        {" "}
        <h3 className="text-4xl leading-tight font-bold ">Service Process</h3>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mt-3 mb-5">
        <div className="border border-green-400 px-4 py-2 rounded-md text-center shadow flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/due7btgno/image/upload/v1712922276/alvxhcbmfc5y3yhljwdp.jpg"
              alt="order online"
              className="h-40 w-40 md:h-60 md:w-60 text-2xl mx-auto"
            />
          </div>
          <h1 className="text-black rounded-full px-2 text-xl">Order Online</h1>
          <p className="bg-blue-500 text-white rounded-full px-2 text-2xl">1</p>
        </div>

        <div className="border border-green-400 px-4 py-3 rounded-md text-center shadow flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/due7btgno/image/upload/v1712922276/dkbmwovlzxqj5foupd7b.jpg"
              alt="order online"
              className="h-40 w-40 md:h-60 md:w-60 text-2xl mx-auto"
            />
          </div>
          <h1 className="text-black rounded-full px-2 text-xl">Pick Up</h1>
          <p className="bg-blue-500 text-white rounded-full px-2 text-2xl">2</p>
        </div>

        <div className="border border-green-400 px-4 py-2 rounded-md text-center shadow flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/due7btgno/image/upload/v1712915969/p67vsahwkd3izylgochf.jpg"
              alt="order online"
              className="h-40 w-40 md:h-60 md:w-60 text-2xl mx-auto"
            />
          </div>
          <h1 className="text-black rounded-full px-2 text-xl">Cleaning</h1>
          <p className="bg-blue-500 text-white rounded-full px-2 text-2xl">3</p>
        </div>

        <div className="border border-green-400 px-4 py-2 rounded-md text-center shadow flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/due7btgno/image/upload/v1712922276/ulnec8q2a5qpuxzh937d.jpg"
              alt="order online"
              className="h-40 w-40 md:h-60 md:w-60 text-2xl mx-auto"
            />
          </div>
          <h1 className="text-black rounded-full px-2 text-xl">Drop Off</h1>
          <p className="bg-blue-500 text-white rounded-full px-2 text-2xl">4</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
