const StepOne = () => {

  const platforms = [
    {image: require('../images/php.webp'), name: 'PHP'},
    {image: require('../images/php.webp'), name: 'React'},
    {image: require('../images/php.webp'), name: 'WordPress'},
  ]

  return (
    <div className="step-one">
      <h3>Choose your platform</h3>
      <div className="d-flex justify-content-center"><div className="border-bottom"></div></div>
      <div className="row platforms">
        {platforms && platforms.map((platform, index) => (
          <div className="col-sm-4 platform-box" key={index}>
            <div className="d-flex justify-content-center">
              <img src={platform.image}
                alt={`Website Activity Checker for ${platform.name}`}
                title={`Website Activity Checker for ${platform.name}`}
              />
            </div>
            <p>{platform.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepOne
