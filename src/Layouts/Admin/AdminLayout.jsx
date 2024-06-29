import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/userStore/authSlice";
import { useEffect } from "react";
import CheckAuth from "@hook/Auth/CheckAuth";
import useAlert from "@hook/Alert/alert";

function AdminLayout() {
  const userAuth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { showAlert } = useAlert();

  const { validToken } = CheckAuth();
  if (!validToken) {
    dispatch(removeUser());
    showAlert("Login Timing Expired", 'danger');
  }

  useEffect(() => {
    if (!userAuth.data || !validToken) navigate("/portal/authenticate");
  }, [userAuth, validToken]);

  return (
    <>
      <div className="wrapper">
        <Sidebar />

        <div className="main-panel">
          <Header />

          {/* Main Content */}
          <div className="container">
            <div className="page-inner">
              <Outlet />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
