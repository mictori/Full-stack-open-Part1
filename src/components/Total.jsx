const Total = (props) => {
  return (
    <div>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

export default Total
