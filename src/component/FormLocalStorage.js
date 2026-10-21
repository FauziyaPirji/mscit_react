import react, {useState, useEffect} from 'react'

const FormLocalStorage = () => {
    const [formvalue, setFormvalue] = useState({firstname: '', lastname: '', mobileNumber: ''})
    const [error, setError] = useState({firstname: '', lastname: '', mobileNumber: ''})
    const [data, setData] = useState([])

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("formData")) || [];
        setData(storedData);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formvalue)

        let errorData = {}
        let isValid = true

        if (!formvalue.firstname || formvalue.firstname == "") {
            isValid = false
            errorData.firstname = "First Name is required"
        }
        if (!formvalue.lastname || formvalue.lastname == "") {
            isValid = false
            errorData.lastname = "Last Name is required"
        }
        if (!formvalue.mobileNumber || formvalue.mobileNumber == "") {
            isValid = false
            errorData.mobileNumber = "Mobile Number is required"
        }

        setError(errorData)

        if(isValid === false) {
            return false
        }

        const getLocatStorageData = JSON.parse(localStorage.getItem('formData'))
        let storageData = []

        if (getLocatStorageData && getLocatStorageData.length > 0) {
            storageData = [...getLocatStorageData, formvalue]   
        }
        else {
            storageData = [formvalue]
        }

        setData(storageData)

        localStorage.setItem('formData', JSON.stringify(storageData))

        setFormvalue({firstname:'', lastname:'', mobileNumber:''})
    }

    return(
        <>
            <hr/>
            <table border={2} align="center">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile Number</th>
                </tr>
                {
                    data?.map((d,index) => {
                        return(
                            <tr key={index}>
                                <td>{d.firstname}</td>
                                <td>{d.lastname}</td>
                                <td>{d.mobileNumber}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <h1>Registration</h1>
            <form onSubmit={handleSubmit} method="post">
                <span>First Name:</span>
                <input type="text" name="firstname" value={formvalue.firstname} onChange = {(e) => setFormvalue({...formvalue, firstname: e.target.value})} /><br/>
                {error.firstname && <span style={{color:"red"}}>First Name is required</span>}<br/>

                <span>Last Name:</span>
                <input type="text" name="lastname" value={formvalue.lastname} onChange = {(e) => setFormvalue({...formvalue, lastname: e.target.value})} /><br/>
                {error.lastname && <span style={{color:"red"}}>Last Name is required</span>}<br/>

                <span>Mobile Number:</span>
                <input type="text" name="mobilenumber" value={formvalue.mobileNumber} onChange = {(e) => setFormvalue({...formvalue, mobileNumber: e.target.value})} /><br/>
                {error.mobileNumber && <span style={{color:"red"}}>Mobile Number is required</span>}<br/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormLocalStorage