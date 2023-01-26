import './App.css';
import { SearchPage } from './SearchPage';
import { About } from './About';


function App() {

  return (
    <div className="app">
      <h1>Find My Movie</h1>
      <SearchPage />
      <About />
    </div>
  );
}

export default App;