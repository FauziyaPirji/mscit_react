import React from "react";
import ChildB from "./ChildB";

const ChildA = (props) => {
    return (
        <>
            <h1>ChildA Component</h1>
            <ChildB money={props.money} setMoney={props.setMoney} />
        </>
    )
}

export default ChildA;