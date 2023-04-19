import logo from './logo.svg';
import './App.css';
import ReactBenifits from './ReactBenifits'
import Button from './Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactBenifits/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
