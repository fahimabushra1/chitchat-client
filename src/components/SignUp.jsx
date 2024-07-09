import { IoIosCloseCircleOutline } from "react-icons/io";
import UseAuth from "../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
const SignUp = () => {
    const {createUser,user}= UseAuth();
    console.log(user)

    const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/home'

    const handleSubmit= async(e)=>{
        e.preventDefault();
      
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const remail = form.remail.value;
        const birthday = form.birthday.value;
        const male = form.male.value;
        const female = form.female.value;
        const custom = form.custom.value;
        const rpassword = form.rpassword.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(fname,lname,birthday,male,female,custom,remail,rpassword,confirmPassword)

        
    if(password != confirmPassword){
        toast.error("password don't match")
      }

      if(password==confirmPassword){
        createUser(email,password)
      }
    }

    useEffect(()=>{
        if(user){
          navigate(from,{replace:true})
        }
      },[user,navigate,from])


    return (
    <>
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
      <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
       <div className="form-control">
     <label className="label">
       <span className="label-text">First Name</span>
     </label>
     <input type="text" name="fname" placeholder="first name" className="input input-bordered max-h-10 bg-slate-100" required />
     </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Surname</span>
     </label>
     <input type="text" name="lname" placeholder="surname" className="input input-bordered max-h-10 bg-slate-100" required />
     </div>
    </div>
    <div className="form-control">
     <label className="label">
       <span className="label-text">Date of birth</span>
     </label>
     <input type="date" name="birthday" placeholder="date of birth" className="input input-bordered max-h-10 bg-slate-100" required />
     </div>
    <div className="form-control">
        <div className="label">
             <p className="label-text">Gender</p>
             <div>
                 <input type="radio" id="male" name="male"         value="male" required/>
                 <label className="ml-2">Male</label>
             </div>
             <div className="mx-4">
                 <input type="radio" id="female" name="female"     value="female" required/>
                 <label className="ml-2">Female</label>
             </div>
             <div>
                 <input type="radio" id="custom" name="custom"      value="custom" required/>
                 <label className="ml-2">Custom</label>
            </div>
        </div>
    </div>
    <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" name="remail" placeholder="email" className="input input-bordered max-h-10 mb-4 bg-slate-100" required />
   </div>
        <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" name="rpassword" placeholder="password" className="input input-bordered max-h-10 mb-4 bg-slate-100" required />
     </div>
     <div className="form-control">
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered max-h-10 mb-4 bg-slate-100" required />
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
        </>
    );
};

export default SignUp;