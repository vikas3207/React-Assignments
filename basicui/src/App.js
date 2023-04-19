import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ReactBenifits/>
      {/* <Button/> */}
      </header>
    </div>
  );
}
function ReactBenifits(){
  return(
  <div>
    <h2>Benifits of using react...</h2>
    <p>1. Component-Based Architecture</p>
    <p>2. Virtual DOM for efficient update</p>
    <p>3. Rich ecosytem and community</p>
    <p>4. Cross platform development</p>
    <p>5. Strong community support</p>
  </div>
  );
}
// function Button(){
//   return(
//     <button>Get started..</button>
//   );
// }

export default App;
