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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "../../Components/SuiBox";
import SuiTypography from "../../Components/SuiTypography";

// Soft UI Dashboard React examples
import UserLayout from "../../Layouts/User";

// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
// import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
// import Header from "layouts/profile/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
// import homeDecor1 from "../../Assets/images/home-decor-1.jpg";
// import homeDecor2 from "../../Assets/images/home-decor-2.jpg";
// import homeDecor3 from "../../Assets/images/home-decor-3.jpg";
// import team1 from "../../Assets/images/team-1.jpg";
// import team2 from "../../Assets/images/team-2.jpg";
// import team3 from "../../Assets/images/team-3.jpg";
// import team4 from "../../Assets/images/team-4.jpg";

function Overview() {
  return (
    <UserLayout>
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}></Grid>
          <Grid item xs={12} md={6} xl={4}></Grid>
          <Grid item xs={12} xl={4}></Grid>
        </Grid>
      </SuiBox>
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h6" fontWeight="medium">
                Projects
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}></Grid>
              <Grid item xs={12} md={6} xl={3}></Grid>
              <Grid item xs={12} md={6} xl={3}></Grid>
              <Grid item xs={12} md={6} xl={3}></Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
    </UserLayout>
  );
}

export default Overview;
