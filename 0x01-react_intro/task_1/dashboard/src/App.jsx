import holbertonLogo from "./assets/holberton-Logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          src={holbertonLogo}
          className="App-logo"
          alt="logo"
          width={200}
          height={200}
        />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright (c) {getFullYear()} {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
