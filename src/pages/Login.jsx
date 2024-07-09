import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
import SignUp from "../components/SignUp";
import useAuth from "../hooks/UseAuth";
import { useEffect } from "react";
const Login = () => {
  const {signIn, user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user?.email)
const from = location?.state?.from?.pathname || '/home'
  const handleSubmit= (e)=>{
    e.preventDefault();

    const form = e.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email, password);
 signIn(email,password);
  }

  useEffect(()=>{
    if(user){
      navigate(from,{replace:true})
    }
  },[user,navigate,from])

    return (
        <div className="bg-[#7ABAB4]">
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-left align-middle w-1/2 px-24 lg:text-left">
      <h1 className="text-5xl font-bold text-[#071777]">CHITCHAT</h1>
      <p className="py-6 text-3xl text-[#D2CEB5]">
      Chichat helps you connect and share with the people in your life.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0C3AA2] text-white">Login</button>
        </div>
        <label className="label mx-auto">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
          </label>
          <div className="divider divider-start"></div>
          <div className="form-control">       
<SignUp/>
        </div>
      </form>
    </div>
  </div>
</div>
<div><p className="py-6 text-lg text-[#fff1a0] ml-44 -mt-20"><Link to={"/pages/create"} className="font-bold">Create a Page</Link> for a celebrity, brand or business.</p></div>
</div>
    );
};

export default Login;