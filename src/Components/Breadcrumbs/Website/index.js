import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./styles.scss";

const Breadcrumb = ({ routes }) => {
  // const location = useLocation();
  // const [routes, setRoutes] = useState([]);
  //
  // useEffect(() => {
  //   const { pathname } = location;
  //
  //   const temp = [];
  //   const pathArray = pathname.replace("/", "").split("/");
  //   pathArray.forEach((item, i) => {
  //     item = item.replaceAll("-", " ");
  //     temp.push(item);
  //   });
  //   setRoutes(temp);
  // }, []);

  return (
    <div id="breadcrumbs">
      <Link to="/">
        <FaHome /> Home
      </Link>
      {routes && routes.length
        ? routes.map((route, i) => (
            <a href="#" key={i}>
              {route}
            </a>
          ))
        : null}
    </div>
  );
};

export default Breadcrumb;
