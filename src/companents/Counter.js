//Funcsional companetlar

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // boshlangish qiymat
    
    function inc() {
        setCount(prev => prev + 1)
      };
    
      function dec() {
        setCount(prev => prev - 1)
      };
    
    return(
        <>
           <h3>Count: {count}</h3>
           <button
           onClick={inc}
           className="btn btn-success">INCR</button>
           <button
           onClick={dec}
           className="btn btn-danger">DECR</button>
        </>
    )
}