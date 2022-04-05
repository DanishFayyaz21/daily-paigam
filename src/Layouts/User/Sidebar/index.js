import Sidenav from "../../../Components/Sidenav";
import {
  useSoftUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "../../../Context/theme";

import { privateRoutes } from "../../../Routes";

const UserLayout = () => {
  const [controller, dispatch] = useSoftUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
  } = controller;

  return (
    <Sidenav
      color={sidenavColor}
      brandName="Daily Paigam"
      routes={privateRoutes}
    />
  );
};

export default UserLayout;
