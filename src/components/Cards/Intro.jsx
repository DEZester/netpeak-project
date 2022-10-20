const Intro = () => {
  return (
    <div className="price-card">
      <div className="price-card__price-container">
        <h1 className="price-card__price">$19</h1>
        <span className="price-card__perMonth">/month</span>
      </div>
      <div className="price-card__title-container">
        <h2 className="price-card__title">Starter</h2>
        <span className="price-card__info">Unleash the power of automation.</span>
      </div>
      <ul className="price-card__list firstList">
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>Multi-step Zaps
        </li>
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>3 Premium Apps
        </li>
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>2 Users team
        </li>
      </ul>
      <button className="price-card__btn">Choose plan</button>
    </div>
  );
};

export default Intro;
