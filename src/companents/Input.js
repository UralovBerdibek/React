import { useState } from "react";

export default function Input() {
    const [value, setValue] = useState('');

    return(
        <>
          <p>Value: {value}</p>
          <input 
          type="text" 
          className="form-control my-2"
          value={value}
          onChange={event => setValue(event.target.value)} />
        </>
    )
}