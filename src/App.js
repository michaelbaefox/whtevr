import React,{useState} from "react"
import Hello from "./components/Hello.js"
import Counter from "./components/Counter.js"
import Playground from "./components/Playground.js"
import AgeChecker from "./components/AgeChecker"
import RightTriArea from "./components/RightTriArea"

let App = () => {
  let [fontSize,setFontSize]=useState("")
  let [color,setColor]=useState("")
  let [activated,setActivated]=useState("")
  return (
      <div>
          {activated == "activated"?(
            <h1
            style={{
              fontSize: fontSize,
              color: color,
              transition: "all 10s" 
            }}
            >Welcome to Laughing Lichterman

            </h1>
          ):(
            <h3>
              whtevr
            </h3>
          )}
          <RightTriArea />
          <RightTriArea />
          <RightTriArea />
          <RightTriArea />
          <input
            type="text" 
            value={fontSize} 
            placeholder="fontSize"
            onChange={e => setFontSize(e.target.value)}
          />
          <input
            type="color" 
            value={color} 
            placeholder="color"
            onChange={e => setColor(e.target.value)}
          />
          <input
            type="text" 
            value={activated} 
            placeholder="Drink Coor"
            onChange={e => setActivated(e.target.value)}
          />
          <h1>Practice Your Tags!</h1>
          <p>Pls LIKE and SUBSCRIBE!</p>
          <Hello name="Gary" /> 
          <Hello name="Melissa" />
          <Counter />
          <Playground />
          <AgeChecker />
        </div>
  )
}

export default App