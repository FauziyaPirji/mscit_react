import React from "react";

const ChildC = (props) => {
    const handleButton = () => {
        props.setMoney(props.money + 10)
    }

    return (
        <>
            <h1>ChildC Component - {props.money}</h1>
            <button onClick={handleButton}>Add Money</button>
        </>
    )
}

export default ChildC;