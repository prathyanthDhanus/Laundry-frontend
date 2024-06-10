import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Get in Touch</h2>
      <div className="flex flex-wrap items-center mb-8">
        <img src="https://www.discover.com/content/dam/discover/en_us/credit-cards/card-acquisitions/grey-redesign/global/images/background/bg-contact-us-stocksy-675-456.png" alt="contact" className="w-full md:w-1/2  h-full border-10 rounded-xl object-cover" />
        <div className="ml-4 md:ml-8 lg:ml-12 p-5">
          <p className="text-3xl text-gray-600 leading-relaxed">
           
            <p>📌 <span className="text-6xl font-bold">❝</span>Experience the joy of fresh, clean laundry with just a touch.</p>
             Reach out to us for a service that cares for your clothes as much as you do.
            <span className="text-6xl font-bold">❞</span>
          </p>
        </div>
      </div>
        <h1 className="text-2xl font-bold mb-2 text-center">🌍Catch We🌍</h1>
        <div className="bg-indigo-100 p-4 rounded-xl flex flex-wrap justify-between">
  <div className="flex flex-col">
    <h4 className='text-lg font-bold '>Land Phone:</h4>
    <p className="text-lg text-indigo-600 ">☎️+91 0497 277777</p>
  </div>
  <div className="flex flex-col">
    <h4 className='text-lg font-bold '>Phone:</h4>
    <p className="text-lg text-indigo-600 ">📞+91 9998887770</p>
  </div>
  <div className="flex flex-col">
    <h4 className='text-lg font-bold '>E-Mail</h4>
    <p className="text-lg text-indigo-600">📧laundry@gmail.com</p>
  </div>
</div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;