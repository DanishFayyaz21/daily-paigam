import { useRef, useState, Suspense, lazy } from "react";
import { Modal } from "react-bootstrap";
import Menu from "../Shared/Menu/Menu";
import { GiRunningNinja } from "react-icons/gi";
import "./WAC.scss";
import { commonService } from "../../Services";

const StepOne = lazy(() => import("./Steps/One"));
const StepTwo = lazy(() => import("./Steps/Two"));
const StepThree = lazy(() => import("./Steps/Three"));

const Home = () => {
  const website = useRef();

  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState();
  const [errors, setErrors] = useState([]);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  const submit = () => {
    !commonService.validateURL(website.current.value)
      ? setErrors({ website: "Invalid URL Format" })
      : modalShow();
  };

  return (
    <div id="wac">
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <Menu />
        </div>
        <div className="ps-md-5 hero-box">
          <h1>
            Website Acitivity <br /> Checker
          </h1>
          <span>
            Make sure your website is always up and running <GiRunningNinja />
          </span>
          <div className="input-field">
            <span className="text-warning fw-bold">{errors.website}</span>
            <input
              ref={website}
              onChange={() => setErrors([])}
              className={`${
                errors.website ? `border border-2 border-warning` : ""
              } form-control`}
              placeholder="e.g. dailypaigam.com"
            />
          </div>
          <button className="btn btn-custom-outline mt-2" onClick={submit}>
            Start Running
          </button>
        </div>
      </div>

      <Modal
        id="wac-modal"
        backdrop="static"
        show={show}
        onHide={modalClose}
        size="lg"
        centered
      >
        <Modal.Body>
          <div className="container py-2">
            <Suspense
              fallback={
                <div className="text-center m-5 fw-bold">Loading...</div>
              }
            >
              {step === 1 && (
                <StepOne
                  setStep={setStep}
                  setPlatform={setPlatform}
                  website={website.current ? website.current.value : ""}
                />
              )}
              {step === 2 && <StepTwo setStep={setStep} />}
              {step === 3 && <StepThree website={website} />}
            </Suspense>
            <div className="d-flex justify-content-center dots">
              <span
                className={`dot ${step === 1 ? "active" : ""}`}
                onClick={() => setStep(1)}
              ></span>
              <span
                className={`dot ${step === 2 ? "active" : ""}`}
                onClick={() => setStep(2)}
              ></span>
              <span
                className={`dot ${step === 3 ? "active" : ""}`}
                onClick={() => setStep(3)}
              ></span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
