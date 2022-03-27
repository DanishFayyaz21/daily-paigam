const StepOne = ({ website, setPlatform, setStep }) => {

  const platforms = [
    { id: 1, image: "https://via.placeholder.com/2000", name: "Domain Based" },
    {
      id: 2,
      image: require("../../../Assets/Images/coming-soon.jpg"),
      name: "DNS Based",
    },
    {
      id: 3,
      image: require("../../../Assets/Images/coming-soon.jpg"),
      name: "Single Page App",
    },
  ];

  const handleClick = (id) => {
    if (id == 1) {
      setPlatform(id);
      setStep(2);
    } else {
      alert("Coming Soon!");
    }
  };

  return (
    <div className="step-one mb-3">
      <h3>Choose your tracking method</h3>
      <div className="d-flex justify-content-center">
        <div className="border-bottom"></div>
      </div>
      <div className="row platforms">
        {platforms &&
          platforms.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.id)}
              className="col-sm-4 col-6 platform-box"
            >
              <div className="d-flex justify-content-center">
                <img
                  src={item.image}
                  alt={`Website Activity Checker for ${item.name}`}
                  title={`Website Activity Checker for ${item.name}`}
                />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StepOne;
