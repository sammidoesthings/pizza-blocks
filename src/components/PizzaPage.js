import { PizzaForm, PizzaCard } from './PizzaForm'

function PizzaPage() {

    const dummyPizzas = [
        { 
            pizzaName: 'SammiPizza',
            pizzaSize: 'small',
            pizzaSauce: 'alfredo',
            pizzaTopping1: 'chicken',
            pizzaTopping2: 'bacon',
            pizzaTopping3: 'parmesan'
        },
        { 
            pizzaName: 'KobyPizza',
            pizzaSize: 'large',
            pizzaSauce: 'marinara',
            pizzaTopping1: 'pepperoni',
            pizzaTopping2: 'pineapple',
            pizzaTopping3: 'mozzarella'
        }
    ]

    return (
        <div className='pizza-page-container'>
            
            <PizzaForm/>

            <div>
                fetch pizza above and map through here
            
            {dummyPizzas.map(element => (
                <PizzaCard pizzaObject={element}/>
            ))}
            
            </div>
        {/* DASHBOARD PAGE CONTAINER ENDS HERE */}
        </div>
    )
}

export default PizzaPage