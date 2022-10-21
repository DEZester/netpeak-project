const MainInfo = ({ isMonthly, setButton }) => {
  const monthly = isMonthly ? 'mainInfo__btn mainInfo__btn_active' : 'mainInfo__btn';
  const yearly = isMonthly ? 'mainInfo__btn ' : 'mainInfo__btn mainInfo__btn_active';

  return (
    <div className="mainInfo">
      <h1 className="mainInfo__title">Plans & Pricing</h1>
      <div className="mainInfo__container">
        <p className="mainInfo__paragraph">
          Whether your time-saving automation needs are large or small, we’re here to help you
          scale.
        </p>
        <div className="mainInfo__btns-container">
          <button className={monthly} onClick={() => setButton(true)}>
            Monthly
          </button>
          <button className={yearly} onClick={() => setButton(false)}>
            Yearly
          </button>
        </div>
      </div>
    </div>
  );
};
//something
export default MainInfo;
