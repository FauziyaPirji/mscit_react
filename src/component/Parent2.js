import React, { useState } from "react";
import { MoneyContext } from "./MoneyContext";
import ChildA2 from "./ChildA2";

const Parent2 = () => {
    const [money, setMoney] = useState(10)

    return (
        <>
            <h1>Parent Component</h1>
            <MoneyContext.Provider value={{money, setMoney}}>
                <ChildA2 />
            </MoneyContext.Provider>
        </>
    )
}

export default Parent2;