import React, { useState } from "react";
import ChildA from "./ChildA";

const Parent = () => {
    const [money, setMoney] = useState(10)

    return (
        <>
            <h1>Parent Component</h1>
            <ChildA money={money} setMoney={setMoney} />
        </>
    )
}

export default Parent;