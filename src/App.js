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
           <li>fix: A bug fix</li>
           <li>docs: Documentation only changes</li>
           <li>style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)</li>
           <li>refactor: A code change that neither fixes a bug nor adds a feature</li>
           <li>perf: A code change that improves performance</li>
         </ul>
        </a>
      </header>
    </div>
  );
}

export default App;
