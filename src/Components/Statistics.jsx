import StatisticsLine from "./StatisticsLine"

const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text='Good' value={props.good} />
            <StatisticsLine text='Neutral' value={props.neutral}/>
            <StatisticsLine text='Bad' value={props.bad}/>
            <StatisticsLine text='All' value={props.all}/>
            <StatisticsLine text='Average' value={props.average}/> 
            <StatisticsLine text='Positive' value={props.positive + ' %'}/>
          </tbody>
        </table>
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