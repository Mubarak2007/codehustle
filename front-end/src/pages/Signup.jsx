import React, { useState } from "react";
import image from '../assets/pageimg.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import sign from '../assets/sign.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";




import { useAuth } from "../AuthContext"
const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { login } = useAuth()



  const handelsignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/users/register', {
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json"
        }

      });

      console.log(response.data.token);
      login(response.data.token)
      navigate('/');
    } catch (e) {
      console.error("ERROR:", e.response?.data?.message || e.message);
    }
  };





  return (
    <div className="flex h-screen">
      {/* Left Section with Image */}
      <div className="lg:w-[60%] ">
        <img src={sign} alt="banner" className='w-full h-full object-cover' />
      </div>

      {/* Right Section with Form */}
      <div className="w-1/2 flex flex-col gap-5 items-center justify-center">
        <div className="w-[509px] h-[608px]  gap-5 flex flex-col items-center justify-center">
          {/* Logo */}
          <h2 className="text-xl font-bold mb-2 font-sans text-[25px]">Travelezy</h2>

          {/* Heading */}
          <h1 className="text-[74px] font-sans text-[#1b344f] leading-tight text-center mb-2">
            Create Account
          </h1>
          <p className="text-gray-400 text-[16px] font-sans mb-10 text-center">
            Signup with Email
          </p>

          {/* Form */}
          <form onSubmit={handelsignup} className="flex flex-col gap-3 !w-full !shadow-[0px] !p-0 max-w-md space-y-6">
            {/* Email */}
            <div>
              <label className="text-[16px] font-semibold text-gray-700">Email Id</label>
              <div className="h-[50px] flex items-center border border-gray-300 rounded-lg px-4 mt-2">
                <input
                  type="email"
                  placeholder="@Email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full focus:outline-none text-gray-700  placeholder:text-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-4">
              <label className="text-[16px] font-semibold text-gray-700">Password</label>
              <div className="h-[50px] flex items-center border border-gray-300 rounded-lg px-4 mt-2">
                <input
                  type="password"
                  placeholder="******************"
                  value={password}  
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full focus:outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right text-[12px]">
              <a href="#" className="text-gray-400 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Signup Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[125px] h-[48px] font-sans bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg transition duration-300 text-[16px] shadow-sm"
              >
                SIGNUP
              </button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-3 text-gray-400 text-[14px]">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-[10px]">
              <div className="w-[95px] h-[54px] flex justify-center items-center p-3 border border-gray-200 rounded-lg bg-[#E7F2F5] hover:bg-gray-50">
                <FcGoogle className="w-6 h-6" />
              </div>
              <div className="w-[95px] h-[54px] flex justify-center items-center p-3 border border-gray-200 rounded-lg bg-[#E7F2F5] hover:bg-gray-50">
                <FaFacebook className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-[95px] h-[54px] flex justify-center items-center p-3 border border-gray-200 rounded-lg bg-[#E7F2F5] hover:bg-gray-50">
                <FaApple className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-[14px] font-sans text-gray-500 mt-6">
              Already have account?{" "}
              <a href="/login" className="text-lime-500 font-semibold hover:underline">
                Login Now
              </a>
            </p>
          </form>
        </div>
      </div>


    </div>
  );
};

export default Signup;
