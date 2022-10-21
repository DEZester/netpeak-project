const MainInfo = ({ isMonthly, setButton }) => {
  const monthly = isMonthly
    ? 'mainInfo-container__btns__btn mainInfo-container__btns__btn_active'
    : 'mainInfo-container__btns__btn';
  const yearly = isMonthly
    ? 'mainInfo-container__btns__btn '
    : 'mainInfo-container__btns__btn mainInfo-container__btns__btn_active';

  return (
    <div className="mainInfo">
      <h1 className="mainInfo__title">Plans & Pricing</h1>
      <div className="mainInfo-container">
        <p className="mainInfo-container__paragraph">
          Whether your time-saving automation needs are large or small, we’re here to help you
          scale.
        </p>
        <div className="mainInfo-container__btns">
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
