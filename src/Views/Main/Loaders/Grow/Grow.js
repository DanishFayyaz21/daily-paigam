import PropTypes from 'prop-types';
import './Grow.scss'

const Grow = ({ color }) => {

  return (
    <div
      style={{marginTop: '50vh'}}
      className="d-flex justify-content-center"
    >
      <div
        className="grow-animate"
        style={{backgroundColor: color}}
      ></div>
    </div>
  )
}

Grow.propTypes = {
  color: PropTypes.string,
};

Grow.defaultProps = {
  color: '#ff7f39',
};

export default Grow
