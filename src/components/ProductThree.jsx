import { assets } from "../assets/frontend_assets/assets";

import React from 'react'

const ProductThree = () => {
  return (
    <div className="flex w-full h-60 border mt-4">

        <div className="w-1/5 h-full border">
        <div className=" h-full w-full">
            <div className="h-1/4 w-full pt-3 pl-5">
                <p className=" font-semibold text-lg">Deals and offers</p>
                <p className="pb-4 font-thin text-gray-800 text-sm">Hygiene equipments</p>
            </div>
            <div className="h-3/4 w-full flex gap-3 px-5 pt-2">
            <div className="h-1/4 w-1/4 bg-zinc-700 border rounded-md">
            <div className="flex justify-center"><p className="text-white text-sm">04</p></div>
            <div className="flex justify-center pt-1"><p className="text-xs text-white font-thin">Days</p></div>
            </div>

            <div className="h-1/4 w-1/4 bg-zinc-700 border rounded-md">
            <div className="flex justify-center"><p className="text-white text-sm">13</p></div>
            <div className="flex justify-center pt-1"><p className="text-xs text-white font-thin">Hour</p></div>
            </div>

            <div className="h-1/4 w-1/4 bg-zinc-700 border rounded-md">
            <div className="flex justify-center"><p className="text-white text-sm">34</p></div>
            <div className="flex justify-center pt-1"><p className="text-xs text-white font-thin">Min</p></div>
            </div>

            <div className="h-1/4 w-1/4 bg-zinc-700 border rounded-md">
            <div className="flex justify-center"><p className="text-white text-sm">56</p></div>
            <div className="flex justify-center pt-1"><p className="text-xs text-white font-thin">Sec</p></div>
            </div>

            </div>
        </div>
        </div>
        
        <div className="w-1/5 h-full  border">
        <div className="h-3/4 w-full  pt-5 pl-12">
        <a href="#">
            <img src={assets.watch} alt="" className="h-4/5"/>
        </a>
        </div>
        <div className="h-1/4">
        <div className="flex justify-center"><p className="">Smart watches</p></div>
        <div className="flex justify-center pt-1"><p className="bg-red-100 text-red-500">-25%</p></div>
        </div>
        </div>

        <div className="w-1/5 h-full  border">
        <div className="h-3/4 w-full  pt-5 pl-12">
        <a href="#">
            <img src={assets.laptop} alt="" className="h-4/5"/>
        </a>
        </div>
        <div className="h-1/4">
        <div className="flex justify-center"><p className="">Laptop</p></div>
        <div className="flex justify-center pt-1"><p className="bg-red-100 text-red-500">-15%</p></div>
        </div>
        </div>

        <div className="w-1/5 h-full  border ">
        <div className="h-3/4 w-full  pt-5 pl-12">
        <a href="#">
            <img src={assets.camera} alt="" className="h-4/5"/>
        </a>
        </div>
        <div className="h-1/4">
        <div className="flex justify-center"><p className="">Camera</p></div>
        <div className="flex justify-center pt-1"><p className="bg-red-100 text-red-500">-17%</p></div>
        </div>
        </div>


        <div className="w-1/5 h-full  border ">
        <div className="h-3/4 w-full  pt-5 pl-12">
        <a href="#">
            <img src={assets.headphone2} alt="" className="h-4/5"/>
        </a>
        </div>
        <div className="h-1/4">
        <div className="flex justify-center"><p className="">Headphone</p></div>
        <div className="flex justify-center pt-1"><p className="bg-red-100 text-red-500">-15%</p></div>
        </div>
        </div>


        <div className="w-1/5 h-full  border ">
        <div className="h-3/4 w-full  pt-5 pl-12">
        <a href="#">
            <img src={assets.mobile} alt="" className="h-4/5"/>
        </a>
        </div>
        <div className="h-1/4">
        <div className="flex justify-center"><p className="">Mobiles</p></div>
        <div className="flex justify-center pt-1"><p className="bg-red-100 text-red-500">-20%</p></div>
        </div>
        </div>
    </div>
  )
}

export default ProductThree