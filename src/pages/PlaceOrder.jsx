import { assets } from "../assets/frontend_assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"


const PlaceOrder = () => {
  return (
    <div className="flex  flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">

      {/* ---------------liftside-------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"/>
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="email Address"/>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="street" placeholder="Street address"/>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"/>
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="zipcode"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="country"/>
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="phone number"/>

      </div>


      {/* -----------------rightside----------------- */}

      <div className="mt-8"> 
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
 
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

           {/* -----payment method section------ */}
           <div className="flex  flex-col gap-3 lg:flex-row ">
            <div className="flex items-center border p-2 px-3 cursor-pointer">
              <p className={` bg-red-300 min-w-3.5 h-3.5 border rounded-full`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

           
              <div className="flex items-center border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>


              <div className="flex items-center border p-2 px-3 cursor-pointer">
                <p className="min-w-3.5 h-3.5 border rounded-full"></p>
                <p className="text-sm text-gray-500 font-medium mx-4">Cash On Delivery</p>
              </div>

           
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder