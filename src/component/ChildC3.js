import React, { useContext } from "react";
import { MoneyContext } from "./MoneyContext";
import { useDispatch, useSelector } from "react-redux";
import { addMoney, reduceMoney } from "./moneySlice";

const ChildC3 = () => {
    const money = useSelector((state) => state.money.amount)
    const count = useSelector((state) => state.money.count)
    const dispatch = useDispatch()

    const handleAddButton = () => {
        dispatch(addMoney(50))
    }

    const handleReduceButton = () => {
        dispatch(reduceMoney(20))
    }

    return (
        <>
            <h1>ChildC Component - {money}</h1>
            <button onClick={handleAddButton}>Add Money</button>
            <br />
            <button onClick={handleReduceButton}>Reduce Money</button>
        </>
    )
}

export default ChildC3;