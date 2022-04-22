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
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Soft UI Dashboard React components
import SuiBox from "../SuiBox";
import SuiTypography from "../SuiTypography";

function Footer() {
  return (
    <SuiBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component={Link}
                to="/"
                variant="body2"
                color="secondary"
              >
                Home
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SuiTypography
                component={Link}
                to="/website-activity-checker"
                variant="body2"
                color="secondary"
              >
                WAC
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <SuiBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SuiBox mr={3} color="secondary">
              <SuiTypography
                component="a"
                target="_blank"
                color="secondary"
                href="https://www.facebook.com/dailypaigam"
              >
                <FacebookIcon fontSize="small" />
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <SuiTypography
                component="a"
                target="_blank"
                color="secondary"
                href="https://twitter.com/DailyPaigam"
              >
                <TwitterIcon fontSize="small" />
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <SuiTypography
                component="a"
                target="_blank"
                color="secondary"
                href="https://www.instagram.com/dailypaigam/"
              >
                <InstagramIcon fontSize="small" />
              </SuiTypography>
            </SuiBox>
            <SuiBox mr={3} color="secondary">
              <SuiTypography
                component="a"
                target="_blank"
                color="secondary"
                href="https://www.pinterest.com/dailypaigam/"
              >
                <PinterestIcon fontSize="small" />
              </SuiTypography>
            </SuiBox>
            <SuiBox color="secondary">
              <SuiTypography
                component="a"
                target="_blank"
                color="secondary"
                href="https://www.linkedin.com/company/dailypaigam"
              >
                <LinkedInIcon fontSize="small" />
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SuiTypography variant="body2" color="secondary">
            Copyright &copy; {new Date().getFullYear()} Daily Paigam.
          </SuiTypography>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default Footer;
