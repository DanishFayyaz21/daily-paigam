import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { IoCaretForward } from "react-icons/io5";

import "./ForgetPassword.scss";

const ForgetPassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const identity = useRef();

  return (
    <div id="forget-password">
      <p onClick={handleShow}>Forget Password</p>

      <Modal show={show} onHide={handleClose} centered id="forget-modal">
        <Modal.Body className="p-4">
          <h5>Forget your password?</h5>
          <p>
            Use your email or username to recieve the link to reset your
            password.
          </p>
          <div className="form">
            <div className="form-group">
              <input
                className="form-control"
                ref={identity}
                placeholder="Email or Username"
              />
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <div className="form-group d-flex justify-content-end">
                  <button>
                    Forgot <IoCaretForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ForgetPassword;
