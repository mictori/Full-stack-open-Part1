import { useState } from "react";
import Feedback from "./Components/Feedback";
import Statistics from "./Components/Statistics";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      />
    </div>
  )
}

export default App