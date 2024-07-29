const Statistics = (props) => {
  return (
    <div>
        <h1>Statistics</h1>
        <p>
            good {props.good}
        </p>
        <p>
            neutral {props.neutral}
        </p>
        <p>
            bad {props.bad}
        </p>

    </div>
  )
}

export default Statistics