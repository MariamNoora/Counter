import { useState } from "react"
import React from 'react'

function Counterfunction() {
    const [counter, setCounter]=useState(0);
  //counter - state(to store values)
  function incrementCounter()
  {
    setCounter(counter+1);
  }
  function decrementCounter()
  {
    if(counter!=0)
    {
      setCounter(counter-1);
    }
  }
  function resetCounter()
  {
    setCounter(0);
  }
  
  return (
    <div>
        <h4>  Counter Application</h4>
        <h1>  {counter}</h1>
        <button style={{
          background:'green',
          color:'white'
        }} onClick={incrementCounter}><h2>+</h2></button>
        <button style={{
          background:'red',
          color:'white'
        }} onClick={decrementCounter}><h2>-</h2></button>
        <button style={{
          background:'grey',
          color:'white'
        }} onClick={resetCounter}><h2>Reset</h2></button>
    </div>
  )
}

export default Counterfunction