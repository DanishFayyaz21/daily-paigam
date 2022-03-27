import { useRef } from "react";
import { IoCaretForward } from "react-icons/io5";

import ForgetPassword from "../ForgetPassword/ForgetPassword";

const SignIn = () => {
  const username = useRef();
  const password = useRef();

  return (
    <div id="sign-in" className="d-flex">
      <div className="d-flex flex-column align-self-center w-100">
        <h2>
          Daily <span>Paigam</span>
        </h2>
        <h4>Don't have an account? Sign Up</h4>
        <div className="form">
          <div className="form-group">
            <input
              className="form-control"
              ref={username}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref={password}
              placeholder="Password"
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <ForgetPassword />
            </div>
            <div className="col-sm-6">
              <div className="form-group d-flex justify-content-end">
                <button>
                  Sign In <IoCaretForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
