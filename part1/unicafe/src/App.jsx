import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  // Derived state
  const all = good + neutral + bad;
  const average = all / 3;
  const positivePerc = (good / all) * 100;

  return (
    <div> 
      {all === 0 ? <p>No feedback given</p> : (
        <>
          <h1>statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positivePerc}%</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good'/>
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button onClick={() => setBad(bad + 1)} text='bad'/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;