import { useState } from 'react';
import './App.css';
import CalcInput from './components/CalcInput';
import CalcBtns from './components/CalcBtns';

function App() {

  let [expression, setExpression] = useState("");
  let [result, setResult] = useState("");

  const handleClick = (ele) => {
    setExpression(prev => prev + ele);
  }

  const handleEquals = () => {
    try{
       if (/[\+\-\*\/]$/.test(expression) || expression === "") {
      setResult("Error");
      return;
    }
      
      let expResult = eval(expression);
      setResult(expResult);
    }
    catch(error){
      setResult(error);
    }
  }

  const handleClear = () => {
    setExpression("");
    setResult("");
  }

  return (
    <div className="App">
      <CalcInput expression={expression} result={result} />
      <CalcBtns handleClear={handleClear} handleClick={handleClick} handleEquals={handleEquals}/>
    </div>
  );
}

export default App;
