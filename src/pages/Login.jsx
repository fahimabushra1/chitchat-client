import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
const Login = () => {
    const [selectedDate, setSelectedDate]= useState(null);
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0C3AA2] text-white">Login</button>
        </div>
        <label className="label mx-auto">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
          </label>
          <div className="divider divider-start"></div>
          <div className="form-control">
             {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#2DA9DC] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Create new account</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box m-0">
   <div className="flex justify-between">
    <div> <h3 className="font-bold text-3xl">Sign Up</h3></div>
    <div><button><IoIosCloseCircleOutline className="text-3xl" /></button></div>
   </div>
    <p>It's quick and easy</p>
    <div className="divider divider-start"></div>
   <form>
   <div className="flex justify-between items-center">
        <div>
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered bg-slate-100 input-md w-full max-w-xs max-h-10" />
        </div>
        <div>
            <input
              type="text"
              placeholder="Surname"
              className="input input-bordered max-h-10 bg-slate-100 input-md w-full max-w-xs" />
        </div>
    </div>
    <label className="form-control w-full">
  <div className="label">
    <span className="label-text">Date of birth</span>
  </div>
  <div className="relative w-1/2">
  <DatePicker type="text" placeholder="Type here" className="input input-bordered max-h-10 bg-slate-100 w-full" dateFormat={"dd/mm/yyyy"} selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
  <FaCalendarAlt className="absolute top-2 right-12 text-xl text-[#2DA9DC]" />
  </div>
  </label>
  <label className="form-control w-full">
  <div className="label">
  <p className="label-text">Gender</p>
    <div className="flex justify-evenly">
        <div className="items-center"><span>Male</span><input type="radio" name="radio-2" className="radio radio-primary pt-2" /></div>
        <div><span>Female</span><input type="radio" name="radio-2" className="radio radio-primary" /></div>
        <div><span>Custom</span><input type="radio" name="radio-2" className="radio radio-primary" /></div>
    </div>
    </div>
    </label>
  <div className="mt-4">
            <input
              type="email"
              placeholder="email address"
              className="input input-bordered bg-slate-100 input-md w-full max-w-xs max-h-10 mb-4" />
        </div>
        <div>
            <input
              type="password"
              placeholder="new password"
              className="input input-bordered bg-slate-100 input-md w-full max-w-xs max-h-10" />
        </div>
   </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-[#0C3AA2] text-white">Sign Up</button>
      </form>
    </div>
  </div>
</dialog>
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