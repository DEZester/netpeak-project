const Premium = () => {
  return (
    <div className="main-premium-card">
      <div className="most-popular">MOST POPULAR</div>
      <div className="premium-card price-card">
        <div className="price-card__price-container">
          <h1 className="price-card__price white-text">$89</h1>
          <span className="price-card__perMonth white-text">/month</span>
        </div>
        <div className="price-card__title-container">
          <h2 className="price-card__title white-text">Company</h2>
          <span className="price-card__info ">Automation plus enterprise-grade features.</span>
        </div>
        <ul className="price-card__list premium-list">
          <li className="price-card__list-item ">
            <i className="price-card__icon list-icon-pr"></i>Multi-step Zaps
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon list-icon-pr"></i>Unlimited Premium Apps
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon list-icon-pr"></i>Unlimited Users Team
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon list-icon-pr"></i>Advanced Admin
          </li>
          <li className="price-card__list-item ">
            <i className="price-card__icon list-icon-pr"></i>Custom Data Retention
          </li>
        </ul>
        <button className="price-card__btn premium-btn">Choose plan</button>
      </div>
    </div>
  );
};

export default Premium;
