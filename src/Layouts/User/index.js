// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import PageLayout from "./PageLayout";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import SuiBox from "../../Components/SuiBox";
import { useSoftUIController, setLayout } from "../../Context/theme";

import Header from "../../Components/Header/UserHeader";
import DashboardNavbar from "../../Components/Navbars/DashboardNavbar";

import "./styles.scss";

const UserLayout = ({ children, header }) => {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div id="user-layout">
      <Sidebar />
      <SuiBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          p: 3,
          position: "relative",

          [breakpoints.up("xl")]: {
            marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
            transition: transitions.create(["margin-left", "margin-right"], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
        <PageLayout>
          {header ? (
            <Header name={user.name} username={`@${user.username}`} />
          ) : (
            <div className="header-less-navbar">
              <DashboardNavbar absolute />
            </div>
          )}
          {children}
        </PageLayout>
        <Footer />
      </SuiBox>
    </div>
  );
};

// Setting default values for the props of UserLayout
UserLayout.defaultProps = {
  header: true,
};

// Typechecking props for the UserLayout
UserLayout.propTypes = {
  header: PropTypes.bool,
};

export default UserLayout;
