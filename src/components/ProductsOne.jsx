import { assets } from "../assets/frontend_assets/assets";
import React from 'react'

const ProductsOne = () => {
  return (
    <div className="flex flex-wrap w-full h-60  border mt-4">

        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full  border">
        <div className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${assets.pdOne_1})` }}>
            <div className="pt-5 pl-5">
                <p className="pb-4 font-semibold text-lg">Home and <br/> outdoor</p>
            <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-200 transition duration-300">
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
        <p className="font-medium">Soft chair</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_2} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 2 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Kitchen mixer</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 100</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_3} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>

        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full  border ">
        {/* 3 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Lamp</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 20</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_4} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 4 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Blender</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 39</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_5} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>


        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full  border ">
        {/* 5 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Mattress</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 29</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_6} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 6 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium text-sm">Home appliance</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_7} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>


        <div className="w-1/5 sm:w-1/2 lg:w-1/5 h-full  border ">
        {/* 7 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Pot</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_8} alt="" className="h-20" /></div>
        </div>
        </a>
        {/* 8 */}
        <a href="#">
        <div className="h-1/2 w-full  border flex">
        <div className="h-full w-1/2 pt-5 pl-3">
        <p className="font-medium">Soft chair</p>
        <p className="font-thin text-gray-400 text-sm">From <br/>USD 19</p>
        </div>
        <div className="h-full w-1/2 flex justify-end items-end"><img src={assets.pdOne_9} alt="" className="h-20" /></div>
        </div>
        </a>

        </div>




        {/* <div className="w-1/5 h-full  border">
        <div className="h-1/2 w-full  border"></div>
        <div className="h-1/2 w-full  border"></div>
        </div>

        <div className="w-1/5 h-full  border">
        <div className="h-1/2 w-full  border"></div>
        <div className="h-1/2 w-full  border"></div>
        </div>

        <div className="w-1/5 h-full  border">
        <div className="h-1/2 w-full  border"></div>
        <div className="h-1/2 w-full  border"></div>
        </div> */}
    </div>
  )
}

export default ProductsOne