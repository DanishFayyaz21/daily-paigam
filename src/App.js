import { AuthProvider } from "./Context/auth";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React themes
import theme from "./Assets/theme";

// Toast Container
import { ToastContainer } from "react-toastify";

import Main from "./Views/Main/Main";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
