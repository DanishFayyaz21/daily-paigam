import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StepOne = ({ website }) => {

  const navigate = useNavigate()

  const [platform, setPlatform] = useState()
  const platforms = [
    // {id: 1, image: require('../images/php.webp'), name: 'WordPress'},
    {id: 1, image: 'https://via.placeholder.com/2000', name: 'Platform One'},
    {id: 2, image: 'https://via.placeholder.com/2000', name: 'Platform Two'},
    {id: 3, image: 'https://via.placeholder.com/2000', name: 'Platform Three'},
    // {id: 3, image: 'https://via.placeholder.com/2000', name: 'WordPress'},
  ]

  const handleClick = (id) => {
    setPlatform(id)
    // props.step(2)

    navigate({
      pathname: `/wac/${website}_${id}`,
    })
  }

  return (
    <div className="step-one mb-3">
      <h3>Choose your platform</h3>
      <div className="d-flex justify-content-center"><div className="border-bottom"></div></div>
      <div className="row platforms">
        {platforms && platforms.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.id)}
            className="col-sm-4 col-6 platform-box"
          >
            <div className="d-flex justify-content-center">
              <img src={item.image}
                alt={`Website Activity Checker for ${item.name}`}
                title={`Website Activity Checker for ${item.name}`}
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepOne
