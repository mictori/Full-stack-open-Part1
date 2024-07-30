import StatisticsLine from "./StatisticsLine"

const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text='Good' value={props.good} />
        <StatisticsLine text='Neutral' value={props.neutral}/>
        <StatisticsLine text='Bad' value={props.bad}/>
        <StatisticsLine text='All' value={props.all}/>
        <StatisticsLine text='Average' value={props.average ? props.average : 0}/> 
        <StatisticsLine text='Positive' value={props.positive ? props.positive : 0}/>
      </div>
    )
  }
  {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

export default Statistics