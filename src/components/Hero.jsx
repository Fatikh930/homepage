import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-800">
      {/* hero left side-bar */}

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed ">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* <div className="w-full sm:w-1/2 mt-5 pl-4 flex-col items-start justify-start py-10 sm:py-0 ">
        <ul className="gap-8">
          <li><a href="">Automobiles</a></li>
          <li><a href="">Clothes and Wear</a></li>
          <li><a href="">Home Interior</a></li>
          <li><a href="">Computer and Tech</a></li>
          <li><a href="">Tools and Equipment</a></li>
          <li><a href="">Sports and Outdoors</a></li>
          <li><a href="">Animal and Pets</a></li>
          <li><a href="">Machinery Tools</a></li>
          <li><a href="">More Categories</a></li>
        </ul>
      </div>
      <img className="w-full h-full sm:w-1/2" src={assets.hero_img} alt="Hero image" />

      {/* right side-bar */}
      {/* <div className="text-center">
      <img className="w-full h-full sm:w-1/2" src={assets.hero_img} alt="Hero image" />
      </div>
      <div>
      <ul>
        <li>heelo</li>
        <li>hello</li>
      </ul>
      </div> */}
      <img className="w-full h-full sm:w-1/2" src={assets.hero_img} alt="Hero image" /> 
        
    </div>
  );
};

export default Hero;
