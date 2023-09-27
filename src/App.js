import "./App.css";
import { useState } from 'react';

export default function App() {
const [digits, setDigits] = useState('1,2,3,4,5');

  function addOne(itemStr) {
  let items = itemStr.split(',')
    
  let idx = items.findLastIndex((element) => element < 9);

  if(idx === -1) {
    items.unshift(0);
    idx = 0;
  }
  
  items[idx]++;
  for (let i = idx + 1; i < items.length; i++) {
    items[i] = 0;
  }
  return items.join(',');
  }
  
  return (
    <div className="App">
      <div>
        <span>Введите большое число в виде массива </span>
        <input value={digits} onChange={(e)=>setDigits(e.target.value)}/>
      </div>
      <div>
        <span>Большое число +1,в виде массива</span>
        <span>{addOne(digits)}</span>
      </div>
    </div>
  );
}
