/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// React Icons components
import { FaPlus } from "react-icons/fa";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";

// Soft UI Dashboard React components
import SuiBox from "../../SuiBox";
import SuiAvatar from "../../SuiAvatar";
import SuiButton from "../../SuiButton";
import SuiTypography from "../../SuiTypography";

// Soft UI Dashboard React examples
import DashboardNavbar from "../../Navbars/DashboardNavbar";

// Soft UI Dashboard React base styles
import breakpoints from "../../../Assets/theme/base/breakpoints";

// Soft UI Dashboard React icons
import Cube from "../../../Assets/Icons/Cube";
import Document from "../../../Assets/Icons/Document";
import Settings from "../../../Assets/Icons/Settings";

// Images
import burceMars from "../../../Assets/Images/bruce-mars.jpg";
import curved0 from "../../../Assets/Images/curved-images/curved0.jpg";

function Header({ name, username }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative">
      <DashboardNavbar absolute light />
      <SuiBox
        display="flex"
        alignItems="center"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.primary.main, 0.6),
              rgba(gradients.primary.state, 0.6)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
            rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              name={name}
              variant="rounded"
              bgColor="error"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                {name}
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                {username}
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={5} lg={3} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <div className="d-flex justify-content-end">
                <Link to="/post">
                  <SuiButton
                    component={Link}
                    to="/post"
                    variant="gradient"
                    color="primary"
                    style={{ color: "#fff" }}
                    fullWidth
                  >
                    <FaPlus size="10" />
                    <span className="ms-2">Post</span>
                  </SuiButton>
                </Link>
              </div>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
