import React, { useContext } from "react";
import { MoneyContext } from "./MoneyContext";

const ChildC2 = () => {
    const handleButton = () => {
        setMoney(money + 10)
    }

    const {money, setMoney} = useContext(MoneyContext);

    return (
        <>
            <h1>ChildC Component - {money}</h1>
            <button onClick={handleButton}>Add Money</button>
        </>
    )
}

export default ChildC2;