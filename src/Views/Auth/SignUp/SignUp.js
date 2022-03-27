import { useRef } from "react";
import { IoCaretForward } from "react-icons/io5";

import ForgetPassword from "../ForgetPassword/ForgetPassword";

const SignIn = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <div id="sign-up" className="d-flex">
      <div className="d-flex flex-column align-self-center w-100">
        <h2>
          Daily <span>Paigam</span>
        </h2>
        <h4>Already have an account? Sign In</h4>
        <div className="form">
          <div className="form-group">
            <input className="form-control" ref={name} placeholder="Name" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref={username}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input className="form-control" ref={email} placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref={password}
              placeholder="Password"
            />
          </div>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="form-group d-flex justify-content-end">
                <button>
                  Sign Up <IoCaretForward />
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
