import React, { useState } from "react"
import ageChecker from "../utils/ageChecker"

let AgeChecker = () => { 
    let [text, setText] = useState("Passwoord") 
    let playClick = () => {
        let textNumber = Number(text)
        ageChecker(textNumber)
    } 
    let textChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input
                type="number"
                placeholder="your age"
                value={text}
                onChange={textChange}
            />
            <button onClick={playClick}>
                Submit age
            </button>
        </div>
    )
}

export default AgeChecker

