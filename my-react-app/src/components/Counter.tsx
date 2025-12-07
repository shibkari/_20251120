import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const increment = () => setCount((prevCount) => prevCount + step);
  const decrement = () => setCount((prevCount) => prevCount - step);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Stateful Component: Counter</h2>
      <div className="counter-display">
        <p className="count-value">{count}</p>
      </div>
      <div className="counter-controls">
        <button onClick={decrement} className="btn btn-decrement">
          - {step}
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn-increment">
          + {step}
        </button>
      </div>
      <div className="step-control">
        <label htmlFor="step">Step: </label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
        />
      </div>
    </div>
  );
};

export default Counter;