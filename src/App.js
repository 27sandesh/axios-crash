import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExpenseItem></ExpenseItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React js
        </a>
      </header>
    </div>
  );
}

export default App;
