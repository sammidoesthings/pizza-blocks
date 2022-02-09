import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const initialCreds = {
        username: '',
        password: '',
    }

    const [ creds, setCreds ] = useState(initialCreds)
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
        console.log(`logged in with ${creds}`)
        axios.post(`backend url for login`, creds)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
                redirect('/dashboard')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='login-page-container'>
        
            <p>Enter your username and password to login!</p>
            
            <form>

                <label> Username: &nbsp;
                    <input
                        name='username'
                        type='text'
                        value={creds.username}
                        onChange={handleChange}
                        placeholder='Enter Username'
                    />
                </label>

                <label> Password: &nbsp;
                    <input
                        name='password'
                        type='text'
                        value={creds.password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                    />
                </label>

                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            {/* FORM ENDS HERE */}
            </form>

        {/* LOGIN PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export default LoginPage