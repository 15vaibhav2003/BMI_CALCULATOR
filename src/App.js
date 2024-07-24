import React, { useMemo, useState } from "react";
import './App.css'
const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
 function changeheight(e){setHeight(e.target.value)}
 function changeweight(e){setWeight(e.target.value)}
  const output = useMemo(()=>{return ((weight)/(height*height))},[weight,height])

  return (
    <div class="main">
    <div class="outer ">
      <h1 >BMI Calculator</h1>

      <div class="inner">
        <label>Height:{height}m</label>
        <input type="range" value="height" min="0"  max="150" onChange={changeheight}/>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div class="inner">
        <label>Weight:{weight}kg</label>
        <input type="range" step="1" value="weight" min="0"  max="150" onChange={changeweight}/>
      </div>

      <h3>Your BMI Is</h3>
      <div class="output">
        <h3>{output}</h3>
      </div>
    </div>
    </div>
  );
};

export default App;
