
const ParallaxExample = () => {
  return (
    <div className="parallax">
      <div className="parallax_group" id="group1" >

        <div className="parallax_layer parallax_layer--base">
            <div className="title">Base Layer</div>
        </div>

        <div className="parallax_layer parallax_layer--back">
            <div className="title">Backgroud</div>
        </div>
        
      </div>
    </div>
  )
}

export default ParallaxExample
