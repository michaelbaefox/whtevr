import React, { useState } from "react"

let Counter = () => {
    let [value, setValue] = useState(4) 
    let minusClick = () => {
        if (value < 0) {
            alert("you're not high enough!!!")
            return
        }
        setValue(value - 1)
    } 
    let plusClick = () => {
        if (value > 10) {
            alert("too high!!!")
            return
        }
        setValue(value + 1)
    }   
    return (
        <div>
            {value}
        <button onClick={minusClick}>
            minus
        </button>
        <button onClick={plusClick}>
            plus
        </button>
        </div>
    )
}

export default Counter

