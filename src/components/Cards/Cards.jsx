import Base from './Base';
import Intro from './Intro';
import Premium from './Premium';

const Cards = () => {
  return (
    <div className="cards">
      <Intro />
      <Base />
      <Premium />
    </div>
  );
};

export default Cards;
