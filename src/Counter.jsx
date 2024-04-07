import { useState } from "react";
import './Counter.css';
const Counter=()=>{
  const [count,setcount]=useState(0);

  const increase=()=>{
    if(count<20)
    setcount(count+1);
  }

  const Decrease=()=>{
    if(count>0)
    setcount(count-1);
  }
  return (
    <>
    <div className="counter">
    <div className="counter_heading">
    <p className="counter_name">Counter App</p>
    <p className="counter_count">total counts {count}</p>
    </div>
    <div className="buttons">
      <button className="counter_button" onClick={increase} >increase by 1</button>
      <button className="counter_button" onClick={Decrease}>Decrease by 1</button>
    </div>
    </div>
    </>
  )
}
export default Counter;