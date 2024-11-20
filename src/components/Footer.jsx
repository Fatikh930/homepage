import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-500">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Best information about the company <br/> gies here but now lorem ipsum is
          </p>
          <div className="flex gap-5">
            <a href="#">
              <img src={assets.facebook} alt="" className="mb-5 w-5 mt-4" />
            </a>
            <a href="#">
              <img src={assets.linkedin} alt="" className="mb-5 w-5 mt-4" />
            </a>
            <a href="#">
              <img src={assets.twitter} alt="" className="mb-5 w-5 mt-4" />
            </a>
            <a href="#">
              <img src={assets.youtube} alt="" className="mb-5 w-5 mt-4" />
            </a>
            <a href="#">
              <img src={assets.tiktok} alt="" className="mb-5 w-5 mt-4" />
            </a>
          </div>
        </div>
        
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-309-1812339</li>
            <li>fatikhkhan2@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
            <hr/>
            <p className="py-5 text-sm text-gray-500">© 2023 Ecommerce</p>
        </div>
    </div>
  );
};

export default Footer;
