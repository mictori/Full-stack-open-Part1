const StatisticsLine = (props) => {
  return (
    <tr>
        <td>
            {props.text} 
        </td>
        <td>
            {props.value}         
        </td>
    </tr>
  )
}

export default StatisticsLine