import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      url: "/portal",
      icon: <MdSpaceDashboard />,
      childred: [],
    },
    {
      name: "Students",
      url: "#",
      icon: <IoPersonSharp />,
      childred: [
        { name: "Add Student", url: "/portal/add-student" },
        { name: "List Students", url: "/portal/students" },
      ],
    },
    {
      name: "Institure",
      url: "#",
      icon: <PiBuildingsBold />,
      childred: [
        { name: "Branches", url: "/portal/branch" },
        { name: "Staff", url: "/portal/staff" },
      ],
    },
    {
      name: "Payment",
      url: "#",
      icon: <BsCashCoin />,
      childred: [
        { name: "Payment Slip", url: "/portal/payment-slip" },
        { name: "Payment Records", url: "/portal/payment-record" },
        { name: "Due Payments", url: "/portal/due-payment" },
      ],
    },
  ];

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar sidebar-style-2" data-background-color="dark">
        <div className="sidebar-logo">
          {/* <!-- Logo Header --> */}
          <div className="logo-header" data-background-color="dark">
            <Link to={"/"} className="logo">
              <img
                src="/assets/img/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </Link>
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
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              {menus.map((item, index) => (
                <MenuItems
                  key={"m" + index}
                  index={index}
                  title={item.name}
                  link={item.url}
                  icon={item.icon}
                  child={item.childred}
                />
              ))}

              {/* <li className="nav-item active">
                <Link to={"/"} className="collapsed">
                  <i>
                    <MdSpaceDashboard />
                  </i>
                  <p>Dashboard</p>
                </Link>
              </li> */}
              {/* <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Components</h4>
              </li> */}
              {/* <li className="nav-item">
                <a data-bs-toggle="collapse" href="#base">
                  <i>
                    <MdSpaceDashboard />
                  </i>
                  <p>Students</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="base">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="components/avatars.html">
                        <span className="sub-item">Add Student</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/buttons.html">
                        <span className="sub-item">List Students</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                  <i>
                    <MdSpaceDashboard />
                  </i>
                  <p>Institure</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="sidebarLayouts">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="sidebar-style-2.html">
                        <span className="sub-item">Branches</span>
                      </a>
                    </li>
                    <li>
                      <a href="icon-menu.html">
                        <span className="sub-item">Staff</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#forms">
                  <i>
                    <MdSpaceDashboard />
                  </i>
                  <p>Payment</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="forms">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="forms/forms.html">
                        <span className="sub-item">Payment Slip</span>
                      </a>
                    </li>
                    <li>
                      <a href="forms/forms.html">
                        <span className="sub-item">Payment Records</span>
                      </a>
                    </li>
                    <li>
                      <a href="forms/forms.html">
                        <span className="sub-item">Due Payments</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
}

export default Sidebar;
