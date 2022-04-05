import PageLayout from "./PageLayout";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import SuiBox from "../../Components/SuiBox";
import { useSoftUIController, setLayout } from "../../Context/theme";

const UserLayout = ({ children }) => {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;

  return (
    <div>
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
        <PageLayout>{children}</PageLayout>
        <Footer />
      </SuiBox>
    </div>
  );
};

export default UserLayout;
