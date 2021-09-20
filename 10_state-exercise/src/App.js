import Rando from './Rando';
// import Button from './Button';
import './App.css';
import BrokenClick from './BrokenClick';
import Clicker from './StateClicker';


function App() {
  return (
    <div className="App">
      <Rando maxNum={7}/>
      <hr/>
      <BrokenClick/>
      <hr/>
      <Clicker/>
    </div>
  );
}

export default App;
