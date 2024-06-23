import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";
import useAlert from "@hook/Alert/alert";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userStore/authSlice";
import { useNavigate } from "react-router-dom";
import useUnAuthPost from "@hook/PostRequest/useUnAuthPost";

function SignIn() {
  const [viewPass, setViewPass] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (!email || email == "") {
      showAlert("Please Enter Your Email", "warning");
    } else if (!password || password == "") {
      showAlert("Please Enter Your Password", "warning");
    } else {
      try {
        const response = await unAuthApiCall("/auth/login", userData);
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
      //     .post("/auth/login", userData, {
      //       headers: { "Content-Type": "application/json" },
      //     })
      //     .then(({ data }) => {
      //       if (!data.success) {
      //         showAlert(data?.errors?.error, "warning");
      //       } else {
      //         showAlert(data?.message, "success");
      //         dispatch(
      //           setUser({
      //             name: data?.name,
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
      <form className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i>
            <SiMaildotru />
          </i>
          <input
            type="email"
            placeholder="Email"
            onInput={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="input-field toggle_closest">
          <i>
            <MdOutlinePassword />
          </i>
          <input
            type={viewPass ? "text" : "password"}
            placeholder="Password"
            onInput={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
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
        <button className="btn" disabled={isLoading} onClick={handleLogin}>
          Login{" "}
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

export default SignIn;
