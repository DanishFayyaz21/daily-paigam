import { useRef, useState } from "react";
import { IoCaretForward } from "react-icons/io5";
import { toast } from "react-toastify";

import { commonService } from "../../../Services";
import { authService } from "../../../Services";

import { Auth } from "../../../Context/auth";

import ForgetPassword from "../ForgetPassword/ForgetPassword";

const SignIn = () => {
  const { signIn } = Auth();

  const username = useRef();
  const password = useRef();

  const [usernameE, setUsernameE] = useState(false);
  const [passwordE, setPasswordE] = useState(false);

  const submit = ({ redirect }) => {
    let error = false;

    if (commonService.validateUsername(username.current.value)) {
      setUsernameE(true);
      error = true;
    } else {
      setUsernameE(false);
    }
    if (password.current.value.length <= 0) {
      setPasswordE(true);
      error = true;
    } else {
      setPasswordE(false);
    }

    if (!error) {
      const data = {
        username: username.current.value,
        password: password.current.value,
      };
      authService.login(data).then((res) => {
        const { data } = res;
        if (data.error) {
          toast.error(data.message);
        } else if (data.id) {
          localStorage.setItem("token", data.id);
          if (redirect) window.location.href = "/dashboard";
          else signIn();
        }
      });
    }
  };

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
              className={`form-control ${
                usernameE && `border border-2 border-danger`
              }`}
              ref={username}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className={`form-control ${
                passwordE && `border border-2 border-danger`
              }`}
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <ForgetPassword />
            </div>
            <div className="col-sm-6">
              <div className="form-group d-flex justify-content-end">
                <button onClick={submit}>
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

SignIn.defaultProps = {
  redirect: true,
};

export default SignIn;
