import React, { useState } from 'react'

export default function Counter() {
    const [count,setcount]=useState(0);
    const increment=()=>
    {
        var x= count;
        x++;
        setcount(x)
    }
    const decrement=()=>
    {
        var x= count;
        x--;
        setcount(x)
    }
  return (
    <div>Counter
        <h2>{count}</h2>
        {count<6?<input type="button" value="+" onClick={increment}></input>:""}
        {count>0?<input type="button" value="-" onClick={decrement}></input>:""}

        
        

    </div>

  )
}
