import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <div id="kitchen">
      <h4>Kitchen</h4>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen