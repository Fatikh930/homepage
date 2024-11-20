import { assets } from "../assets/frontend_assets/assets";
import React from "react";

const HerosTwo = () => {
  return (
    <div
      className="bg-cover bg-center h-96 w-full mt-4 flex items-center relative"
      style={{ backgroundImage: `url(${assets.heros2})` }}
    >
      {/* Left Content */}
      <div className="ml-4 w-1/2">
        <h1 className="text-white text-xl font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Alias modi, doloribus tempora quis placeat deserunt 
          <br /> cum totam natus labore consectetur omnis similique! 
          <br />
        </h1>
      </div>
      {/* Right Side Inquiry Form */}
      <div className="bg-white p-6 shadow-lg rounded-md w-1/3 ml-auto mr-4">
        <h2 className="text-lg font-bold mb-3">Send quote to Suppliers</h2>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="What item you need?"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="More details"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default HerosTwo;
