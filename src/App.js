import './App.css';
import MainCard from './MainCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MainCard         nombre="Our Collection"
        descripcion="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly."/>
      </header>
    </div>
  );
}

export default App;
