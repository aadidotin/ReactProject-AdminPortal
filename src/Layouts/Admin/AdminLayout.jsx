import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function AdminLayout() {
  const userAuth = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth) navigate("/portal/authenticate");
  }, [userAuth]);

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
