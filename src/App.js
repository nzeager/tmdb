import './App.css';
import { SearchPage } from './SearchPage';
import { About } from './About';


function App() {

  return (
    <div className="app">
      <div>
        <h1 className='site-title'>Find My Movie</h1>
        <SearchPage />
      </div>
      <div className="about">
        <About />
      </div>
    </div>
  );
}

export default App;