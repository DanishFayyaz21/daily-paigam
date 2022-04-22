import { Link } from "react-router-dom";

const Menu = () => {
  const menu = [
    { name: "Home", link: "/", type: "list" },
    { name: "Login", link: "/auth", type: "button" },
  ];

  return (
    <ul className="menu">
      {menu &&
        menu.length &&
        menu.map((item, index) =>
          item.type === "list" ? (
            <li className="menu-item" key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ) : (
            <button className="btn btn-custom-outline menu-item" key={index}>
              <Link to={item.link}>{item.name}</Link>
            </button>
          )
        )}
    </ul>
  );
};

export default Menu;
