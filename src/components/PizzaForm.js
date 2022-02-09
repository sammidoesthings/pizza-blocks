import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function PizzaForm() {

    const initialPizza = {
        pizzaName: '',
        pizzaSize: '',
        pizzaSauce: '',
        pizzaTopping1: '',
        pizzaTopping2: '',
        pizzaTopping3: ''
    }

    const [pizza, setPizza] = useState(initialPizza)
    const redirect = useNavigate();

    const handleChange = changes => {
        const { name, value } = changes.target;
        setPizza({
            ...pizza,
            [name]: value,
        })
    }

    const handleSubmit = submit => {
        submit.preventDefault();
        axios.post(`backend url for create pizza`, pizza)
            .then(response => {
                redirect('/dashboard')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <p>Create your pizza here!</p>

            <form>

                <label>
                    <input 
                        name='pizzaSize'
                        type='text'
                        value={pizza.pizzaSize}
                        onChange={handleChange}
                        placeholder='What size?'
                    />
                </label>

                <label>
                    <input 
                        name='pizzaSauce'
                        type='text'
                        value={pizza.pizzaSauce}
                        onChange={handleChange}
                        placeholder='What sauce?'
                    />
                </label>

                <label>
                    <input 
                        name='pizzaTopping1'
                        type='text'
                        value={pizza.pizzaTopping1}
                        onChange={handleChange}
                        placeholder='First topping?'
                    />
                </label>

                <label>
                    <input 
                        name='pizzaTopping2'
                        type='text'
                        value={pizza.pizzaTopping2}
                        onChange={handleChange}
                        placeholder='Second topping?'
                    />
                </label>

                <label>
                    <input 
                        name='pizzaTopping3'
                        type='text'
                        value={pizza.pizzaTopping3}
                        onChange={handleChange}
                        placeholder='Third topping?'
                    />
                </label>

                <label>
                    <input 
                        name='pizzaName'
                        type='text'
                        value={pizza.pizzaName}
                        onChange={handleChange}
                        placeholder='Name this pizza!'
                    />
                </label>

                <button onClick={handleSubmit}>Submit</button>

            </form>


        {/* PIZZA FORM CONTAINER ENDS HERE */}
        </div>
    )
}

function PizzaCard(props) {

    return (
        <div className='plant-card-container'>

            <h1>{props.pizzaObject.pizzaName}</h1>
            <p>{props.pizzaObject.pizzaSize}</p>
            <p>{props.pizzaObject.pizzaSauce}</p>
            <p>{props.pizzaObject.pizzaTopping1}</p>
            <p>{props.pizzaObject.pizzaTopping2}</p>
            <p>{props.pizzaObject.pizzaTopping3}</p>

        {/* PIZZA CARD CONTAINER ENDS HERE */}
        </div>
    )
}

export { PizzaForm, PizzaCard }