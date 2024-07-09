// import UseAuth from "../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect} from "react";
const SignUp = ({createUser,user}) => {
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
  
       
    if(rpassword != confirmPassword){
        toast.error("password don't match")
      }

      if(rpassword==confirmPassword){
       await createUser(remail,rpassword)
      }
    }

    useEffect(()=>{
        if(user){
          navigate(from,{replace:true})
        }
      },[user,navigate,from])


    return (
    <>
         {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="signUp-modal" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
  <h3 className="font-bold text-3xl">Sign Up</h3>
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
     <div className="modal-action">
      <label htmlFor="signUp-modal" className="btn bg-[#0C3AA2] text-white">Sign Up</label>
    </div>
   </form>
  </div>
</div>  
        </>
    );
};

export default SignUp;