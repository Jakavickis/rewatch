import './App.scss';
import Square from './components/day1/Square';
import Day005 from './components/day2/Day005';
import Select from './components/day3/Select';

function App() {

  return (
    <>
      <h1 className='container'>DAY 1</h1>
      <Square />
      <h1 className='container'>DAY 2</h1>
      <Day005 />
      <h1 className='container'>DAY 3</h1>
      <Select />
    </>
  );
}

export default App;
