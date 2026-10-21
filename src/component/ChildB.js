import React from "react";
import ChildC from "./ChildC";

const ChildB = (props) => {
    return (
        <>
            <h1>ChildB Component</h1>
            <ChildC money={props.money} setMoney={props.setMoney} />
        </>
    )
}

export default ChildB;