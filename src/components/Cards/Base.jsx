const Base = ({ isMonthly }) => {
  return (
    <div className="price-card">
      <div className="price-card__price-container">
        <h1 className="price-card__price">{isMonthly ? '$54' : '$36'}</h1>
        <span className="price-card__perMonth">/month</span>
      </div>
      <div className="price-card__title-container">
        <h2 className="price-card__title">Professional</h2>
        <span className="price-card__info">
          Advanced tools to take your work to the next level.
        </span>
      </div>
      <ul className="price-card__list secondList">
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>Multi-step Zaps
        </li>
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>Unlimited Premium
        </li>
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>50 Users team
        </li>
        <li className="price-card__list-item">
          <i className="price-card__icon"></i>Shared Workspace
        </li>
      </ul>
      <button className="price-card__btn">Choose plan</button>
    </div>
  );
};

export default Base;
