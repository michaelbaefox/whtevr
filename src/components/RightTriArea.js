import React, { useState } from "react"
import calcTriangle from "../utils/calcTriangle"

let RightTriArea = () => { 
    let [base, setBase] = useState("Passwoord") 
    let [height, setHeight] = useState("Passwoord") 
    let playClick = () => {
        let baseNumber = Number(base)
        let heightNumber = Number(height)
        let result = calcTriangle(baseNumber, heightNumber)
        alert("the area is: "+result)
    } 
    let heightChange = (e) => {
        setHeight(e.target.value)
    }
    let baseChange = (e) => {
        setBase(e.target.value)
    }
    return (
        <div>
            <input
                type="number"
                placeholder="base"
                value={base}
                onChange={baseChange}
            />
            <input
                type="number"
                placeholder="height"
                value={height}
                onChange={heightChange}
            />
            <button onClick={playClick}>
                Calculate area
            </button>
        </div>
    )
}

export default RightTriArea

