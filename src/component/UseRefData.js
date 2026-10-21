import React, { useRef } from "react";

const UseRefData = () => {
    const firstName = useRef("")
    const lastName = useRef("")

    const handleSubmit = () => {
        if(!firstName.current.value || firstName.current.value == "") {
            firstName.current.focus()
        }
        else if(!lastName.current.value || lastName.current.value == "") {
            lastName.current.focus()
        }
        else {
            alert(firstName.current.value + " " + lastName.current.value)
        }
    }

    return (
        <>
            <input type="text" name="firstName" placeholder="First Name" ref={firstName} />
            <input type="text" name="lastName" placeholder="Last Name" ref={lastName} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default UseRefData;