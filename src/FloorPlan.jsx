import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return (
    <div id="floor-plan">
      <Bedroom bedNum={1}/>
      <Bath size="Full" />
      <Bedroom bedNum={2}/>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={3}/>
      <Bath size="Half" />
    </div>
  )
}

export default FloorPlan