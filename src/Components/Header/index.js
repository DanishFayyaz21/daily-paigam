import { Auth } from "../../Context/auth";
import { Link } from "react-router-dom";

import { FaRegUserCircle } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const { isAuthenticated } = Auth();

  return (
    <div id="header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <h3 className="text-dark mt-1">
              Daily<span>Paigam</span>
            </h3>
          </Link>
          <Link to={isAuthenticated ? "/dashboard" : "/auth"}>
            <FaRegUserCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
