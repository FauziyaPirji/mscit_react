import React, { useState } from "react";
import { MoneyContext } from "./MoneyContext";
import { Provider } from "react-redux";
import { Store } from "./Store";
import ChildA2 from "./ChildA3";

const Parent3 = () => {
    const [money, setMoney] = useState(10)

    return (
        <>
            <h1>Parent Component</h1>
            <Provider store={Store}>
                <ChildA2 />
            </Provider>
        </>
    )
}

export default Parent3;