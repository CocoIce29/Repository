import logo from './logo.svg';
import './App.css';
import hello from './test_v.js'

function App() {
  var x = 0;
  var out = "";
  // if(x > 1){
  //   out = "true";
  // }
  // else{
  //   out = "false"
  // }
  x > 1 ? out = "true" : out = "false"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {out} <code>src/App.js</code> and save to reload or maybe not.....
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;