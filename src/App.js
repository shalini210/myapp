import logo from './logo.svg';
import './App.css';
import First from './First';
import Revise from './Revise';
import Headercomponent from './Headercomponent';
import Menu from './Menu';
import Footercomponent from './Footercomponent';

function App() {
  return (
    <div className="App">
        <Headercomponent></Headercomponent>
        
      <Revise></Revise>
      <h1> my first reacgfcv t app </h1>
      <First></First>
      <h3>below we will use first component again </h3>
      <First></First>
      <Footercomponent></Footercomponent>
    </div>
  );
}

export default App;
