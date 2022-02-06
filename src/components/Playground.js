import React from "react"

let Playground = () => { 
    let playClick = () => {
        let Paul = {
            lesserBeatle: "maybe not",
            goodHair: true,
            bearded: false
        }
        let traits = [
            "decent",
            "caucasian",
            "Beatle"
        ]
        let { lesserBeatle } = Paul
        let [trait1,trait2] = traits
        alert(lesserBeatle)
        alert(trait2)
    } 
     
    return (
        <div>
            <button onClick={playClick}>
                play
            </button>
        </div>
    )
}

export default Playground

