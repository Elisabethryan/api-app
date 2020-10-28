import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <form >
        <label>
          Alias:
          <input type="text" name="name" />
        </label>
        <label>
          Agent number:
          <input type="number" name="Agent number" />
        </label>
        <label>
          Number 1
          <input type="number" name="Number1" />
        </label>
        <label>
          Number 2
          <input type="number" name="Number2" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
  );
}

export default App;
