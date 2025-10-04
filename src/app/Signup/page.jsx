"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import{axioms} from "axioms";

export default function SignUpPage(){

    const [user,setUser]=React.useState({
        email: "",
        password: "",
        username: "",
    });
    const onSignup = async ()=>{

    }
    

return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">

   <h1 className="text-white">Sign Up Page </h1> 
   <hr/>

   <label className="text-white" htmlFor="username">Username</label>   
   <input className="p-2 border border-gray-50 focus:outline-none focus:border-gray-50 mb-4 rounded-lg"
   id="username"
   type="text"
   value={user.username}
   onChange={(e)=>setUser({...user,username:e.target.value})}
   placeholder="username"
   />
   <label className="text-white" htmlFor="email">Email</label>   
   <input className="p-2 border border-gray-50 focus:outline-none focus:border-gray-50 mb-4 rounded-lg"
   id="email"
   type="email"
   value={user.email}
   onChange={(e)=>setUser({...user,email:e.target.value})}
   placeholder="Email"
   />
   <label className="text-white" htmlFor="password">Password</label>   
   <input className="p-2 border border-gray-50 focus:outline-none focus:border-gray-50 mb-4 rounded-lg"
   id="password"
   type="password"
   value={user.password}
   onChange={(e)=>setUser({...user,password:e.target.value})}
   placeholder="Password"
   />
<button
 onClick={onSignup} 
 className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white">Login</button>
   </div>

);

}