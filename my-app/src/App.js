import logo from './logo.svg';
import './App.css';
import Temp from './Temp';
import Hello from './Hello';
import Demo from './Demo';





function App() {
  return (
    <div className="App">
      <Temp/>       {/*  <temp> is a functional component */}                          
      <Hello/>
      <Demo/>

        
    </div>
  );
}

export default App;
