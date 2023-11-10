import { getFooterCopy, getFullYear } from './utils';
import reactLogo from './assets/holberton-logo.jpg';
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
        <h1>School dashboard</h1>
      </div>
        <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright (c) {getFullYear()} {getFooterCopy()}</p>

      </div>
    </React.Fragment>
  );
}

export default App;
