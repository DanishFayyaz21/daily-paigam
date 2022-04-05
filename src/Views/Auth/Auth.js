import { Row, Col } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import "./Auth.scss";

const Auth = () => {
  return (
    <div id="auth">
      <div className="container">
        <Row>
          <Col sm={6}>
            <SignIn />
          </Col>
          <Col sm={6}>
            <SignUp />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Auth;
