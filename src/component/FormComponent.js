import react, {useState} from 'react'

const FormComponent = () => {
    const [count, setCount] = useState(0)
    const [formvalue, setFormvalue] = useState({firstname: '', lastname: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formvalue)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count <= 0) {

        }
        else {
            setCount(count - 1)
        }
    }

    return(
        <>
            <hr/>

            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <hr/>

            <form onSubmit={handleSubmit} method="post">
                <span>First Name:</span>
                <input type="text" name="firstname" onChange = {(e) => setFormvalue({...formvalue, firstname: e.target.value})} /><br/>
                <span>Last Name:</span>
                <input type="text" name="lastname" onChange = {(e) => setFormvalue({...formvalue, lastname: e.target.value})} /><br/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComponent