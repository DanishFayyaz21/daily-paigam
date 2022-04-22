import { useState, useEffect, lazy } from "react";
import { Auth } from "../../../Context/auth";
import { Grow } from "../../Main/Loaders";

import "../../Auth/Auth.scss";
const SignIn = lazy(() => import("../../Auth/SignIn/SignIn"));
const SignUp = lazy(() => import("../../Auth/SignUp/SignUp"));

const StepTwo = ({ setStep }) => {
  const { isAuthenticated } = Auth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) setStep(3);
    else setLoading(false);
  }, [isAuthenticated]);

  return loading ? (
    <Grow />
  ) : (
    <div className="step-two mb-3">
      <h3>Login or Sign up</h3>
      <div className="d-flex justify-content-center">
        <div className="border-bottom"></div>
      </div>
      <div id="auth">
        <div className="container p-0 mt-3">
          <SignIn redirect={false} />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
