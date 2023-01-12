import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter';
import {useState} from "react"



function App() {
  /* Estados */
  const [number,setNumber]=useState(0)
  
  const addNumber=()=>{
    setNumber(number+1)
  }

  const restart=()=>{
    setNumber(0)
  }


  return (
    <div className="App">
      <div className="counter-container">

      <Counter number={number}></Counter>

      <Boton
      text="Add Number"
      isBtnClick={true}
      addNumber={addNumber}
      />

      <Boton
      text="Reset"
      isBtnClick={false}
      addNumber={restart}
      />

    
      </div>   
    </div>
  );
}

export default App;
