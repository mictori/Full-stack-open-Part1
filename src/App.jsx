import { useState } from "react";
import Feedback from "./Components/Feedback";
import Statistics from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalNumber = good + neutral + bad;
  const averageNumber = (good * 1 + bad * -1) / totalNumber;
  const positiveNumber = (good * 100) / totalNumber;

  function increaseByOne(setCount, count) {
    setCount(count + 1)
  }

  return (
    <div>
      <Feedback 
        onClickGood={() => increaseByOne(setGood, good)}
        onClickNeutral={() => increaseByOne(setNeutral, neutral)}
        onClickBad={() => increaseByOne(setBad, bad)}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={totalNumber}
        average={averageNumber}
        positive={positiveNumber}
      />
    </div>
  )
}

export default App