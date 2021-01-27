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
         </a>
         {/* ADDED PAT KEY IN PROJECT fix */}
         {/* Added a small fix*/}
         {/* Added a feature*/}
         {/* BREAKING CHANGE: testing */}
         <h1>Breaking change</h1>
         <h1>Following commands are used for this:</h1>
         <ul>
           <li>feat: A new feature</li>
           <li>fix: A bug fix</li>
           <li>docs: Documentation only changes</li>
           <li>style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)</li>
           <li>refactor: A code change that neither fixes a bug nor adds a feature</li>
           <li>perf: A code change that improves performance</li>
           <li>test: Adding missing or correcting existing tests</li>
           <li>chore: Changes to the build process or auxiliary tools and libraries such as documentation generation</li>
         </ul>
         <p>Trying breaking change again</p>
      </header>
    </div>
  );
}

export default App;
