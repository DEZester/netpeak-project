import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Header from './components/Header/Header.jsx';
import MainInfo from './components/MainInfo/MainInfo.jsx';

function App() {
  const [isMonthly, setButton] = useState(true);
  return (
    <div className="App">
      <Header />
      <MainInfo setButton={setButton} isMonthly={isMonthly} />
      <Cards isMonthly={isMonthly} />
    </div>
  );
}

export default App;
