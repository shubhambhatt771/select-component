import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const items = ['Yes', 'Probably Not'];

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
