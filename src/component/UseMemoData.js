import React, { useMemo, useState } from "react";

const UseMemoData = () => {
    const [number, setNumber] = useState(6)
    const [count, setCount]= useState(0)

    const calculation = () => {
        console.log("Calculation called...")
        let square
        for(let i=0;i<=10000000;i++) {
            square = number * number
        }
        return square
    }

    // const answer = calculation()

    const answer = useMemo(() => {
        return calculation()
    }, [number])

    return(
        <>
            <h1>UseMemo - {answer}</h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </>
    )
}

export default UseMemoData;