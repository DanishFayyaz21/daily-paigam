const Template = () => {
  return (
    <div className="templete bg-dark">
      <div
        className="d-flex justify-content-center"
        style={{minHeight: '100vh'}}
      >
        <div className="align-self-center text-white">
          <h1 className="fw-bold">
            Templete Includes:
          </h1>
          <ul>
            <li>Axios ^0.24.x</li>
            <li>Bootstrap ^5.x.x</li>
            <li>React Bootstrap ^2.x.x</li>
            <li>React Icons ^4.x.x</li>
            <li>React Router Dom ^6.x.x</li>
            <li>React Toastify ^8.x.x</li>
          </ul>
          <p style={{fontSize: '.9rem'}}>
            <span className="fw-bold">Additional Stuff:</span>{' '}
            <br />This templete is also suitable for PWA Apps.
          </p>
          <cite style={{fontSize: '0.8rem'}}>- Templete By {' '}
            <a href="https://sameerwasim.github.io">Sameer</a>
          </cite>
        </div>
      </div>
    </div>
  )
}

export default Template
