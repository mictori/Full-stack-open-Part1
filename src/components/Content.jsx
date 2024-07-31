import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Content = (props) => {
  return (
    <div>
        <Part1 {...props}/>
        <Part2 {...props}/>
        <Part3 {...props}/>
    </div>
  )
}

export default Content