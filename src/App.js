import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>add</button>
      <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
    </div>
  );
}

export default App;
