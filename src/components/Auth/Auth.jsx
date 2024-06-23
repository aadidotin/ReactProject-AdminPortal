import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUP from "./SignUP";
import img1 from "@images/lg1.png";
import img2 from "@images/lg2.png";
import "../../assets/css/auth.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [signUp, setSignUp] = useState(false);

  const userAuth = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth) navigate("/portal/");
  }, [userAuth]);

  const toggle_signup = () => setSignUp(!signUp);

  return (
    <>
      <div id="layout-wrapper">
        <div className={`authpage ${signUp ? "sign-up-mode" : ""}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <SignIn />

              <SignUP />
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New to our community ?</h3>
                <button className="btn transparent" onClick={toggle_signup}>
                  Sign up
                </button>
              </div>
              <img src={img1} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of Our Valued Members</h3>
                <button className="btn transparent" onClick={toggle_signup}>
                  Sign in
                </button>
              </div>
              <img src={img2} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
