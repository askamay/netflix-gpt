import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handlToggleForm = () => {
    setIsLogin(!isLogin)
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-image"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        />
      </div>
      <form className="rounded-lg text-white absolute p-10 bg-black w-3/12 my-24 left-0 right-0 mx-auto opacity-80">
        <h1 className="font-bold text-3xl py-4">{isLogin?"Log In": "Sign Up"}</h1>
        {!isLogin && <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
          {isLogin?"Log In": "Sign In"}
        </button>
        <p 
        onClick={handlToggleForm} className="my-4 cursor-pointer">
          {isLogin
            ? "Already a User? Log In":"New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );    
};

export default Login;


// <form className="rounded-lg text-white absolute p-10 bg-black w-3/12 my-24 left-0 right-0 mx-auto opacity-80">
//         <h1 className="font-bold text-3xl py-4">{isLogin?"Sign In": "Log In"}</h1>
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="p-2 my-4 w-full bg-gray-700 rounded-lg"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="p-2 my-4 w-full bg-gray-700 rounded-lg"
//         />
//         <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
//           Sign In
//         </button>
//         <p onClick={handlToggleForm} className="my-4">
//           {isLogin
//             ? "New to Netflix? Sign Up Now"
//             : "Already a User? Log In"}
//         </p>
//       </form>