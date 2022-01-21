import { useState, Suspense, lazy } from 'react'
import { Modal } from 'react-bootstrap'
import Menu from '../Shared/Menu/Menu'
import { GiRunningNinja } from 'react-icons/gi';
import './Home.scss';

const StepOne = lazy(() => import('./Steps/One'))

const Home = () => {

  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <div id="home">

      <div className="container">
        <div className="d-flex justify-content-end">
          <Menu />
        </div>
        <div className="ps-md-5 hero-box">
          <h1>Website Acitivity <br /> Checker</h1>
          <span>Make sure your website is always up and running <GiRunningNinja /></span>
          <input className="form-control" placeholder="e.g. https://dailypaigam.com" />
          <button className="btn btn-custom" onClick={modalShow}>Start Running</button>
        </div>
      </div>

      <Modal
        id="home-modal"
        show={show}
        onHide={modalClose}
        size="lg"
        centered
      >
        <Modal.Body>
          <div className="container py-2">
            <Suspense fallback={<div>Loading Step One...</div>}>
              <StepOne />
            </Suspense>

            <div className="d-flex justify-content-center dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Home
