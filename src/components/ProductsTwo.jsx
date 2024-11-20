import { assets } from "../assets/frontend_assets/assets";

import React from 'react'

const ProductsTwo = () => {
  return (
    <div className="flex flex-wrap w-full h-60 border mt-4">

        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full border">
        <div className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${assets.pdTwo_1})` }}>
            <div className="pt-5 pl-5">
                <p className="pb-4 font-semibold text-lg">Consumer <br/>electronics and <br/>gadgets</p>
            <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-pink-300 transition duration-300">
            Source now
          </button>
            </div>
        </div>
        </div>

        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full  border ">
        {/* 1 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Smart Watch</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.watch} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 2 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Gaming headphone</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 100</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.headphone2} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>

        <div className="w-1/5 h-full sm:w-1/2 lg:w-1/5 border ">
        {/* 3 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">DSLR</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 20</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.camera} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 4 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Laptop</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 39</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.laptop} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>


        <div className="w-1/5 h-full sm:w-1/2 lg:w-1/5  border ">
        {/* 5 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Headphone</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 29</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.headphone1} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 6 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium text-sm">Tablet</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.tablet} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>


        <div className="w-1/5 h-full sm:w-1/2 lg:w-1/5  border ">
        {/* 7 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Jug</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.jug} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 8 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Mobile</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.mobile} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>
    </div>

  )
}

export default ProductsTwo