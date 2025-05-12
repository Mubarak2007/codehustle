import "./Home.css";
import { Link } from "react-router-dom";
import image from "../media/land.jpg";
import { Services } from "../components/Services";
import { BookSection } from "../components/BookSection";
import { PackageSection } from "../components/PackageSection";
import { ContInfo } from "../components/ContInfo";

export const Home = () => {
  return (
    <>
      <div className="">
      <section className="relative w-screen h-[90vh] overflow-hidden" id="home">
  {/* Fullscreen Background Image */}
  <div className="absolute inset-0 -z-10">
    <img
      src="land.jpg"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col gap-5 items-center justify-center h-full text-center px-4">
    <h3 className="">
      <span className="text-7xl poppins-bold ">Start Your Journey with </span><br />
      <span className="text-[#92e3a9] charm-bold text-6xl leading-2.5">Travelzy</span>
     
    </h3>

    <p className="text-lg sm:text-xl mt-10 mb-6 p-5">
      Explore the world with us for the best travel experience
    </p>

    <Link to="/locations">
      <button className="bg-[#92e3a9] w-[100px] h-[40px] rounded-lg cursor-pointer">
        Explore
      </button>
    </Link>
  </div>

  {/* Contact Info Bar */}
  <div className="absolute bottom-0 w-full h-[100px] bg-black/60 text-white py-3 px-2 flex flex-col sm:flex-row justify-around text-sm items-center gap-2 ">
    <div className="flex items-center gap-2">
      <i className="fas fa-envelope text-[#92e3a9]"></i>
      <a  href="mailto:info.trabebo@gmail.com    ">info.travelzy@gmail.com</a>
    </div>
    <div className="flex items-center gap-2">
      <i className="fab fa-instagram text-[#92e3a9]"></i>
      <span>travelzy</span>
    </div>
    <div className="flex items-center gap-2 ">
      <i className="fas fa-phone-alt text-[#92e3a9]"></i>
      <a href="tel:7259987584">+91-7259987584</a>
    </div>
  </div>
</section>

      </div>
      <BookSection />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" />
    </>
  );
};
