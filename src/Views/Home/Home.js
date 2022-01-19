import Menu from '../Shared/Menu/Menu'

import { GiRunningNinja } from 'react-icons/gi';
import './Home.scss';

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="d-flex justify-content-end">
          <Menu />
        </div>
        <div className="ps-md-5 hero-box">
          <h1>Let us track your <br /> website activity</h1>
          <span>Make sure your website is always up and running <GiRunningNinja /></span>
          <input className="form-control" placeholder="e.g. https://dailypaigam.com" />
          <button className="btn btn-custom">Start Running</button>
        </div>
      </div>
    </div>
  )
}

export default Home
