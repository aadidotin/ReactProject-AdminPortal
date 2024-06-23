import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { MdOutlinePassword } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";
import useAlert from "@hook/Alert/alert";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userStore/authSlice";
import { useNavigate } from "react-router-dom";
import useUnAuthPost from "@hook/PostRequest/useUnAuthPost";

function SignUP() {
  const [viewPass, setViewPass] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { isLoading, unAuthApiCall } = useUnAuthPost();
  const { showAlert } = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle_ele_btn = () => {
    setViewPass(!viewPass);
  };

  const submitNewUser = async (e) => {
    e.preventDefault();
    const { fullname, email, password } = userData;

    if (!fullname || fullname == "") {
      showAlert("Please Enter Your Name", "warning");
    } else if (!email || email == "") {
      showAlert("Please Enter Your Email", "warning");
    } else if (!password || password == "") {
      showAlert("Please Enter Your Password", "warning");
    } else if (password.length < 8) {
      showAlert("Password must be atleast 8 characters", "warning");
    } else {
      
      try {
        const response = await unAuthApiCall("/auth/signup", userData);
        if (response) {
          showAlert(response?.message, "success");
          dispatch(setUser(response.data));
          navigate("/portal/");
        }
      } catch (error) {
        console.log(error);
        showAlert(error.message, "danger");
      }
      
      // setIsLoading(true);
      // try {
      //   await axios
      //     .post("/auth/signup", userData, {
      //       headers: { "Content-Type": "application/json" },
      //     })
      //     .then(({ data }) => {
      //       if (!data.success) {
      //         showAlert(data?.errors?.error, "warning");
      //       } else {
      //         showAlert(data?.message, "success");
      //         dispatch(
      //           setUser({
      //             name: userData.name,
      //             email: userData.email,
      //             image: data?.image,
      //             authToken: data?.authtoken,
      //           })
      //         );
      //         navigate("/portal/");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       showAlert("Something Went Wrong", "danger");
      //     })
      //     .finally(() => {
      //       setIsLoading(false);
      //     });
      // } catch (error) {
      //   showAlert("Something Went Wrong", "danger");
      //   console.error(error.message);
      // } finally {
      //   setIsLoading(false);
      // }
    }
  };

  return (
    <>
      <form className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i>
            <GoPersonFill />
          </i>
          <input
            type="text"
            placeholder="Full Name"
            value={userData.fullname}
            onInput={(e) =>
              setUserData({ ...userData, fullname: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <i>
            <SiMaildotru />
          </i>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onInput={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="input-field toggle_closest">
          <i>
            <MdOutlinePassword />
          </i>
          <input
            type={viewPass ? "text" : "password"}
            onInput={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            placeholder="Password"
            value={userData.password}
            className="me-4 toggle-eye"
          />
          <span
            className={`mdi position-absolute toggle-eye-button end-0 mt-1 pt-1 me-2`}
            onClick={() => toggle_ele_btn(this)}
            style={{ fontSize: "24px", color: "#9d9d9d" }}
          >
            {!viewPass ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <button className="btn" disabled={isLoading} onClick={submitNewUser}>
          Sign UP{" "}
          {isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
        </button>
      </form>
    </>
  );
}

export default SignUP;
