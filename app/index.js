"use client";
import React, { useState } from "react";
import "./calc.css";
const Page = () => {
  const [cal,setCal]=useState("");
  const[result,setResult]=useState("");
  const op=['/','*','+','.','-'];
  const calculate=()=>{
    setCal(eval(cal).toString())
  }
  const updatecalc= value =>{
    if(
      op.includes(value) && cal==='' || //if the value is empty so we cant use operator
      op.includes(value) && op.includes(cal.slice(-1)) //if the current value and the last type value is operator we cant use that
    ){return}
    setCal(cal+value);
    if(!op.includes(value)){
      setResult(eval(cal+value).toString())
    }
  }
  const num = () => {
    const arr = [];
    for (let i = 1; i < 10; i++) {
      arr.push(<button onClick={()=>updatecalc(i.toString())} key={i}>{i}</button>);
    }
    return arr;
  };
  const deletelast=()=>{
    if(cal =='')
    {
      return
    }
    const value=cal.slice(0,-1)
    if (op.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }
    setCal(value);
    
  }
  return (
    <div className="out">
    
<div className="text">calculator</div>
    <div className="App">
      
      <div className="calculator">
        <div className="display">
         {result ?<span>({result}) </span> : ''} {cal || "0"}
        </div>
        <div className="buttons">
          <button onClick={()=>updatecalc('+')}>+</button>
          <button onClick={()=>updatecalc('-')}>-</button>
          <button onClick={()=>updatecalc('/')}>/</button>
          <button onClick={()=>updatecalc('*')}>*</button>
          <button onClick={deletelast}>DEL</button>
        </div>
        <div className="numbers">
          {num()}
          <button onClick={()=>updatecalc('0')}>0</button>
          <button onClick={()=>updatecalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
