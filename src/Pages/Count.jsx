
import { useState } from 'react';

import ButtonComponent from '../Components/ButtonComponent';


function Count(){
  const [count, setCount] = useState(0);

const increment = () => {
  setCount((prev) => prev + 1);
};

const decrement = () => {
  setCount((prev) => prev - 1);
};
  
  return (
    <div>
      <h1>App counter</h1>
      <div style={{ background: "blue", padding: "24px", borderRadius: "8px" }}>
        <ButtonComponent text="increment" bg="pink" color="black" onClick={increment} />
        <span style={{ margin: "0 20px", color: "#fff", fontSize: "20px", fontWeight: "bold"}}>{count}</span>
        <ButtonComponent text="increment"  bg="red" color="black" onClick={decrement} disabled={count === 0} />
      </div>
    </div>
  )
}

export default Count;
 