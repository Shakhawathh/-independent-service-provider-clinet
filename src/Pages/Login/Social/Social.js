import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/5847f9cbcef1014c0b5e48c8.png";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    
     errorElement = <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    
  }

  if (user) {
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
      </div>
      {errorElement}
      <div>
        <button onClick={()=> signInWithGoogle()} className="btn btn-success w-50 d-block mx-auto ">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span>Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
