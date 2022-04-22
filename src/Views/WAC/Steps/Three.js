import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { wacService } from "../../../Services";

const StepThree = ({ website }) => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(0);
  const text = `daily-paigam-${localStorage.getItem("token")}`;

  const downloadVerifyFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "dailypaigam.txt";
    document.body.appendChild(element);
    element.click();
  };

  const verifyFile = () => {
    setVerify(1);

    const data = { text, website: website.current.value };
    const headers = { "x-access-token": localStorage.getItem("token") };

    wacService.create(data, headers).then((res) => {
      const { data } = res;
      if (data.error || data.errno) setVerify(2);
      else {
        navigate(`/wac?setup=${data.insertId}`);
      }
    });
  };

  const Verify = ({ verify }) => {
    return (
      <span className="ms-3">
        {verify == 1 ? (
          <Spinner animation="border" size="sm" />
        ) : verify == 2 ? (
          <FaTimes className="text-danger" />
        ) : (
          <FaCheck className="text-success" />
        )}
      </span>
    );
  };

  return (
    <div className="step-three mb-3">
      <h3>Verify Domain</h3>
      <div className="d-flex justify-content-center">
        <div className="border-bottom"></div>
      </div>
      <div className="container-fluid my-5">
        <ul className="one">
          <li>
            <div>
              Download the dailypaigam.txt file and put it inside your website
              domain folder.
            </div>
            <button
              onClick={downloadVerifyFile}
              className="btn btn-sm btn-outline-danger rounded-pill"
            >
              Download
            </button>
          </li>
          <li>
            <div>Click to verify the domain ownership</div>
            <button
              onClick={verifyFile}
              className="btn btn-sm btn-outline-success rounded-pill"
            >
              Verify
            </button>
            {verify !== 0 && <Verify verify={verify} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepThree;
