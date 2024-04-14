import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-10 text-5xl font-bold">
          Contact
        </h1>
      </div>
      <div className="container max-w-screen-xl mx-auto my-10 mt-24 mb-24 p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div>
              <h1 className="text-5xl text-white font-bold">
                We are here to help you shape your body!
              </h1>
              <p className="text-xl text-white mt-16">
                At Our gym, we are dedicated to helping you achieve the body
                of your dreams. Our expert trainers and nutritionists will
                work with you to create a personalized fitness and nutrition
                plan that helps you reach your specific goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-16">
              <div>
                <h1 className="text-xl text-white font-bold mb-4 mt-6">New York City, USA</h1>
                <p className="text-white">85 Briston Mint Street,<br/> London, E1 8LG, USA</p>
              </div>
              <div>
                <h1 className="text-xl text-white font-bold mb-4 mt-6">Opening Hours</h1>
                <p className="text-white">Mon to Fri: 7:30 am — 1:00 am</p>
                <p className="text-white">Sat to Sun: 9:00 am — 11:00 pm</p>
              </div>
              <div>
                <h1 className="text-xl text-white font-bold mb-4 mt-6">Information</h1>
                <p className="text-white">+800-123-4567</p>
                <p className="text-white">gym@gymail.com</p>
              </div>
              <div>
                <h1 className="text-xl text-white font-bold mb-4 mt-6">Follow Us On</h1>
                <FontAwesomeIcon icon={faFacebook} className="text-white h-10 w-10 mr-2 cursor-pointer"/>
                <FontAwesomeIcon icon={faTwitter}  className="text-white h-10 w-10 mr-2 cursor-pointer"/>
                <FontAwesomeIcon icon={faInstagram}  className="text-white h-10 w-10 cursor-pointer"/>
              </div>
            </div>
          </div>
          <div>
            <form className="max-w-lg mx-auto bg-[#222222] p-8">
                <h1 className="text-2xl text-white font-bold mb-8">Leave Us Your Info</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Select Class</label>
                    <div className="relative">
                        <select id="classSelect" name="classSelect" className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option value="Cycling">Cycling</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Boxing">Boxing</option>
                            <option value="Running">Running</option>
                            <option value="Power Lifting">Power Lifting</option>
                            <option value="Crossfit">Crossfit</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-[#DCCA87] hover:bg-[#cfc292] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
            </div>
        </div>
      </div>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          className="mx-auto mt-36 mb-24 w-full h-96"
        ></iframe>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Contact;
