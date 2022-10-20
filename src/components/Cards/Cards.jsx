import Base from './Base';
import Intro from './Intro';
import Premium from './Premium';

const Cards = ({ isMonthly }) => {
  return (
    <div className="cards">
      <Intro isMonthly={isMonthly} />
      <Base isMonthly={isMonthly} />
      <Premium isMonthly={isMonthly} />
    </div>
  );
};

export default Cards;
