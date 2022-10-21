const Premium = ({ isMonthly }) => {
  return (
    <div className="main-premium">
      <div className="main-premium__most-popular">MOST POPULAR</div>
      <div className="price-card main-premium__card">
        <div className="price-card__price-container">
          <h1 className="price-card__price main-premium__text">{isMonthly ? '$89' : '$56'}</h1>
          <span className="price-card__perMonth main-premium__text">/month</span>
        </div>
        <div className="price-card__title-container">
          <h2 className="price-card__title main-premium__text">Company</h2>
          <span className="price-card__info ">Automation plus enterprise-grade features.</span>
        </div>
        <ul className="price-card__list main-premium__list">
          <li className="price-card__list-item ">
            <i className="price-card__icon main-premium__icon"></i>Multi-step Zaps
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon main-premium__icon"></i>Unlimited Premium Apps
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon main-premium__icon"></i>Unlimited Users Team
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon main-premium__icon"></i>Advanced Admin
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon main-premium__icon"></i>Custom Data Retention
          </li>
        </ul>
        <button className="price-card__btn main-premium__btn">Choose plan</button>
      </div>
    </div>
  );
};

export default Premium;
