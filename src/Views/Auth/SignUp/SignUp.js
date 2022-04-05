import { useRef, useEffect, useState } from "react";
import { IoCaretForward } from "react-icons/io5";
import { toast } from "react-toastify";

import ForgetPassword from "../ForgetPassword/ForgetPassword";

import { commonService } from "../../../Services";
import { authService } from "../../../Services";

const SignIn = () => {
  const name = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();

  const [nameE, setNameE] = useState(false);
  const [emailE, setEmailE] = useState(false);
  const [usernameE, setUsernameE] = useState(false);
  const [passwordE, setPasswordE] = useState(false);

  const submit = () => {
    let error = false;

    if (commonService.validateUsername(username.current.value)) {
      setUsernameE(true);
      error = true;
    } else {
      setUsernameE(false);
    }
    if (commonService.validateEmail(email.current.value)) {
      setEmailE(true);
      error = true;
    } else {
      setEmailE(false);
    }
    if (name.current.value.length <= 0) {
      setNameE(true);
      error = true;
    } else {
      setNameE(false);
    }
    if (password.current.value.length <= 0) {
      setPasswordE(true);
      error = true;
    } else {
      setPasswordE(false);
    }

    if (!error) {
      const data = {
        name: name.current.value,
        email: email.current.value,
        username: username.current.value,
        password: password.current.value,
      };
      authService.create(data).then((res) => {
        const { data } = res;
        if (data.errno) {
          if (data.errno === 1048) {
            toast.warn("Please, complete the form");
          } else if (data.errno === 1062) {
            toast.error(data.sqlMessage);
          }
        } else {
          localStorage.setItem("token", data.id);
          window.location.href = "/dashboard";
        }
      });
    }
  };

  return (
    <div id="sign-up" className="d-flex">
      <div className="d-flex flex-column align-self-center w-100">
        <h2>
          Daily <span>Paigam</span>
        </h2>
        <h4>Already have an account? Sign In</h4>
        <div className="form">
          <div className="form-group">
            <input
              className={`form-control ${nameE && `border border-danger`}`}
              ref={name}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              className={`form-control ${usernameE && `border border-danger`}`}
              ref={username}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              className={`form-control ${emailE && `border border-danger`}`}
              ref={email}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className={`form-control ${passwordE && `border border-danger`}`}
            />
          </div>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="form-group d-flex justify-content-end">
                <button onClick={submit}>
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
