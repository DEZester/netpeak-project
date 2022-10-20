const MainInfo = () => {
  return (
    <div className="mainInfo">
      <h1 className="mainInfo__title">Plans & Pricing</h1>
      <div className="mainInfo-container">
        <p className="mainInfo-container__paragraph">
          Whether your time-saving automation needs are large or small, we’re here to help you
          scale.
        </p>
        <div className="mainInfo-container__btns">
          <button className="mainInfo-container__btns__btn active-btn">Monthly</button>
          <button className="mainInfo-container__btns__btn">Yearly</button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
