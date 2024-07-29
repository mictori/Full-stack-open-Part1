import Button from "./Button";

const Feedback = (props) => {
  return (
    <div>
        <h1>Give feedback</h1>
        <Button 
          onClick={props.onClickGood}
          text='good'
        />
        <Button 
          onClick={props.onClickNeutral}
          text='neutral'
        />
        <Button 
          onClick={props.onClickBad}
          text='bad'
        />
    </div>
  )
}

export default Feedback