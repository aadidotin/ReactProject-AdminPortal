import { Link } from "react-router-dom";

function MenuItems({ index, title, link, icon, child }) {
  return (
    <>
      {child.length == 0 ? (
        <li className={`nav-item`}>
          <Link to={link} className="collapsed">
            <i>{icon}</i>
            <p>{title}</p>
          </Link>
        </li>
      ) : (
        <li className={`nav-item`}>
          <a data-bs-toggle="collapse" href={"#menu" + index}>
            <i>{icon}</i>
            <p>{title}</p>
            <span className="caret"></span>
          </a>
          <div className="collapse" id={"menu" + index}>
            <ul className="nav nav-collapse">
              {child.map((item, index) => (
                <li key={"sm" + index}>
                  <Link to={item.url}>
                    <span className="sub-item">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
    // setChildLink([...childLink, item.url]);
  );
}

export default MenuItems;
