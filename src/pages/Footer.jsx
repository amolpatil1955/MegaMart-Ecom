import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#009FE3] w-full mt-20 rounded-2xl text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MegaMart</h2>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center mb-2 space-x-2">
            <FaWhatsapp className="text-xl" />
            <p>
              Whats App <br />
              <span className="text-sm">+1 202-918-2132</span>
            </p>
          </div>
          <div className="flex items-center mb-4 space-x-2">
            <FaPhoneAlt className="text-xl" />
            <p>
              Call Us <br />
              <span className="text-sm">+1 202-918-2132</span>
            </p>
          </div>

          <h3 className="font-semibold mb-2">Download App</h3>
          <div className="flex space-x-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white inline-block">
            Most Popular Categories
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            <li>• Staples</li>
            <li>• Beverages</li>
            <li>• Personal Care</li>
            <li>• Home Care</li>
            <li>• Baby Care</li>
            <li>• Vegetables & Fruits</li>
            <li>• Snacks & Foods</li>
            <li>• Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white inline-block">
            Customer Services
          </h3>
          <ul className="space-y-2 mt-3 text-sm">
            <li>• About Us</li>
            <li>• Terms & Conditions</li>
            <li>• FAQ</li>
            <li>• Privacy Policy</li>
            <li>• E-waste Policy</li>
            <li>• Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-10 border-t border-white/30 pt-4">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
