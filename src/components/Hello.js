import React from "react"

let Hello = (props) => {
    if (props.name == "Bobby") {
        return (
            <h3>My name is not Czarnold</h3>
        )
    } else {
        return (
            <div>
                <h1>Hello World</h1>
                <p>My name is {props.name}</p>
            </div>
        )
    }
}

export default Hello