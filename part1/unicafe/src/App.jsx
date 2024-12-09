import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value, isPercentage }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {isPercentage && '%'}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  // Derived state
  const all = good + neutral + bad;
  const average = all / 3;
  const positivePerc = (good / all) * 100;

  if (all === 0) return <div><p>No feedback given</p></div>;

  return (
    <div> 
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={all}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={positivePerc} isPercentage/>
        </tbody>
      </table>  
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
