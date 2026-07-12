import './Cart.css'
import { useState } from "react";

export default function Cart() {
  const [val, setVal] = useState(0);

  return (
    <>
      <h1>Cart Page</h1>
      <h2>{val}</h2>
      <div className='buttons'>
      <button className="btn" onClick={() => setVal(prev => prev + 1)}>
        +
      </button>

      <button className="btn" onClick={() => setVal(prev => prev - 1)}>
        -
      </button>
      </div>
    </>
  );
}