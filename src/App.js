import DisplaySearch from './components/display-search/DisplaySearch';
import DisplayResults from './components/display-results/DisplayResults';
import DisplayMap from './components/display-map/DisplayMap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero"></div>
      <h1 className="main-header">IP Address Tracker</h1>

      <DisplaySearch />
      <DisplayResults />
      <DisplayMap />
    </div>
  );
}

export default App;
