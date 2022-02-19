import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    const initialCreds = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        username: '',
        password: ''
    }

    const [creds, setCreds] = useState(initialCreds)
    const redirect = useNavigate();

    const handleChange = changes => {
        const { name, value } = changes.target;
        setCreds({
            ...creds,
            [name]: value,
        })
    }

    const handleSubmit = submit => {
        submit.preventDefault();
        console.log(`created an account for: ${creds.firstName} ${creds.lastName}`)
        axios.post(`backend url for register`, creds)
            .then(response => {
                redirect('/login')
                axios.post(`backend url for login`, creds)
                    .then(response => {
                        localStorage.setItem('token', response.data.token);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }


    return (
        <div className='register-page-container'>
            <p>Enter your information to create an account below!</p>

            <form>
                <label>
                    <input
                        name='firstName'
                        type='text'
                        value={creds.firstName}
                        onChange={handleChange}
                        placeholder='Enter First Name'
                    />
                </label>
<br></br>
                <label>
                    <input
                        name='lastName'
                        type='text'
                        value={creds.lastName}
                        onChange={handleChange}
                        placeholder='Enter Last Name'
                    />
                </label>
<br></br>
                <label>
                    <input
                        name='emailAddress'
                        type='text'
                        value={creds.emailAddress}
                        onChange={handleChange}
                        placeholder='Enter Email Address'
                    />
                </label>
<br></br>
                <label>
                    <input
                        name='phoneNumber'
                        type='text'
                        value={creds.phoneNumber}
                        onChange={handleChange}
                        placeholder='Enter Phone Number'
                    />
                </label>
<br></br>
                <label>
                    <input
                        name='username'
                        type='text'
                        value={creds.username}
                        onChange={handleChange}
                        placeholder='Enter Username'
                    />
                </label>
<br></br>
                <label>
                    <input
                        name='password'
                        type='text'
                        value={creds.password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                    />
                </label>
<br></br>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </form>

        {/* REGISTER PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export default RegisterPage