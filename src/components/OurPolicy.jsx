import { assets } from "../assets/frontend_assets/assets"


const OurPolicy = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">Suppliers by region</h1>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.pakistan} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Pakistan</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.australia} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Australia</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.bangladesh} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Bangladesh</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.japan} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Japan</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>
                
        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.iraq} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Iraq</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>
                        
        <div className="flex gap-4">
          <div>
            <img className="w-12 m-auto mb-5" src={assets.lebiya} alt="" />
          </div>
          <div>
          <p className=" font-semibold">Lebiya</p>
          <p className="text-gray-400">shopname.ae</p>
          </div>
        </div>
       
        
       
    </div>
    </div>
  )
}

export default OurPolicy