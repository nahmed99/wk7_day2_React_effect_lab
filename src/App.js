import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleFormIncrement = () => {
      setNumber(number + 1);
  }

  const handleFormDecrement = () => {
    setNumber(number - 1);
  }

  useEffect(() => {
    //if (number % 3 === 0 && number % 5 === 0) {
    if (number % 15 === 0) {
      setAnswer("fizzbuz")
    } else if (number % 3 === 0) {
      setAnswer("fizz")
    } else if (number % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(number);
    }
  }, [number]);

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>The Number is now: {number}</p>
      <button onClick={handleFormIncrement}>Increment</button>
      <button onClick={handleFormDecrement}>Decrement</button>
      <p>The FuzBuzz outcome: {answer}</p>
    </>
  );
}

export default App;
