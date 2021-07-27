import React from 'react'
import {useState} from 'react'

export default function Counter() {
    const [num,setnum] = useState(0);
    function increase(params) {
        setnum(num+1)  
    }
    function decrease(params) {
        setnum(num-1)  
    }
    return (
    <div> 
        <span>{num}</span>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>)
}

 
