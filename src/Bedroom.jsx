const Bedroom = (props) => {
  return (
    <div class="bed" id={`bedroom-${props.bedNum}`}>
      <h4>Bedroom {props.bedNum}</h4>
    </div>
  )
}

export default Bedroom