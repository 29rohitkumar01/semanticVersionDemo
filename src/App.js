import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Semantic versioning release in react 
         {/* ADDED PAT KEY IN PROJECT fix */}
         {/* Added a small fix*/}
         {/* Added a feature*/}
         {/* Breaking change testing */}
         <h1>Following commands are used for this:</h1>
         <ul>
           <li>feat: A new feature</li>
         </ul>
        </a>
      </header>
    </div>
  );
}

export default App;
