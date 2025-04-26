import React , {useState} from "react";
import image from '../assets/pageimg.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";


const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()
const {login} = useAuth()

  const handelLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/users/login', {
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
      <div className="w-1/2">
        <img
          src={image}
          alt="Dubai View"
          className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
        />
      </div>



      {/* Right Section with Form */}
      <div className="w-1/2 flex justify-center items-center bg-white rounded-tr-lg rounded-br-lg">
        <div className="w-full max-w-md p-6">
          <h2 className="text-center text-lg font-bold mb-2">Travelezy</h2>
          <h1 className="text-center text-3xl font-medium mb-2 font-serif">
            Welcome
          </h1>
          <p className="text-center text-gray-600 mb-6">Login with Email</p>

          <form onSubmit={handelLogin} className="space-y-4 !w-[100%] !shadow-[0px] !p-0 ">
            <div>
              <label className="block text-sm mb-2">Email Id</label>
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded">
                <span className="text-gray-500 mr-2">@</span>
                <input
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  defaultValue="Mubarak@gmail.com"
                  className="w-full outline-none border-none text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="flex items-center border border-gray-300 px-3 py-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m0-6v.01M17 9V7a5 5 0 00-10 0v2m-2 0h14v10H5V9z"
                  />
                </svg>
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}


                  type="password"
                  defaultValue="*****"
                  className="w-full outline-none border-none text-base"
                />
              </div>
            </div>

            <div className="text-right text-sm text-gray-500 cursor-pointer hover:underline mb-4">
              Forgot your password?
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-lime-400 text-white font-bold rounded hover:bg-lime-500"
            >
              LOGIN
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4 mb-4">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-10 h-10 cursor-pointer"
            />
            <img
              src="https://www.svgrepo.com/show/452234/apple.svg"
              alt="Apple"
              className="w-10 h-10 cursor-pointer"
            />
          </div>

          <p className="text-center text-sm text-gray-600">
            Don’t have account?{" "}
            <a href="#" className="text-black font-bold hover:underline">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
