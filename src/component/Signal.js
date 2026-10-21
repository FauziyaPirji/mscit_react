import React, {useState} from "react";

const Signal = () => {
    const [signalColor, setSignalColor] = useState('red')

    const colorChange = () => {
        if (signalColor == 'red') {
            setSignalColor('green')
        }
        else if (signalColor == 'green') {
            setSignalColor('yellow')
        }
        else {
            setSignalColor('red')
        }
    }

    return (
        <>
            <div style={{backgroundColor:signalColor}}>
                <span>Light</span>
            </div>
            <button onClick={colorChange}>Change</button>
        </>
    )
}

export default Signal;