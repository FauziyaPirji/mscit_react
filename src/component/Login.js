import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate() 

    const [formvalue, setFormvalue] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(formvalue)

        try{
            const response = await axios.post("https://mscit-backend-o21q.onrender.com/api/login", formvalue)
            console.log(response.data)

            if(response.data.status === 1) {
                localStorage.setItem('token', response.data.token)
                navigate('/')
            }
            else {
                alert(response.data.message)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="post">

                <span className="font-semibold">Email:</span>
                <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="email"
                    name="email"
                    onChange={(e) =>
                        setFormvalue({
                            ...formvalue,
                            email: e.target.value
                        })
                    }
                />
                <br />

                <span className="font-semibold">Password:</span>
                <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    type="password"
                    name="password"
                    onChange={(e) =>
                        setFormvalue({
                            ...formvalue,
                            password: e.target.value
                        })
                    }
                />
                <br />

                <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300">Submit</button>

            </form>
        </>
    )
}

export default Login;