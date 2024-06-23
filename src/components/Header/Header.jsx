import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../store/userStore/authSlice";

function Header() {
  const userAuth = useSelector((state) => state.auth.data);
  
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(removeUser());
  };

  return (
    <>
      <div className="main-header">
        <div className="main-header-logo">
          {/* <!-- Logo Header --> */}
          <div className="logo-header" data-background-color="dark">
            <a href="index.html" className="logo">
              <img
                src="/assets/img/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
          {/* <!-- End Logo Header --> */}
        </div>
        {/* <!-- Navbar Header --> */}
        <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg">
          <div className="container-fluid">
            <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
              <li className="nav-item topbar-user dropdown hidden-caret">
                <a
                  className="dropdown-toggle profile-pic"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-expanded="false"
                >
                  <div className="avatar-sm">
                    <img
                      src="/assets/img/profile.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <span className="profile-username">
                    <span className="fw-bold">{userAuth?.name ?? ""}</span>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                      <div className="user-box">
                        <div className="avatar-lg">
                          <img
                            src="/assets/img/profile.jpg"
                            alt="image profile"
                            className="avatar-img rounded"
                          />
                        </div>
                        <div className="u-text">
                          <h4>{userAuth?.name ?? ""}</h4>
                          <p className="text-muted">{userAuth?.email ?? ""}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to={"/portal/profile"}>
                        Profile
                      </Link>

                      <div className="dropdown-divider"></div>
                      <span className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </span>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
      </div>
    </>
  );
}

export default Header;
