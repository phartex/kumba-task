import React,{useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/OrderSummary.css'

const OrderSummary = () => {
    const [orderid,setOrderid] =useState('')
    const [details, setDetails] =useState({})
    const [items, setItems] = useState([])

    
    const fetchUrl='https://indapi.kumba.io/webdev/assignment'

    const fetchData =async ()=>{
        const response = await axios.get(fetchUrl)
        const newRestaurant = response.data.restaurant
        const order = response.data.order_id

        setOrderid(order)
        setDetails(newRestaurant)
        setItems(response.data.items)
    }
   
    
    const{name, street,city,state,zipcode}= details
    
 
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='main container-fluid'>
            <div className="main-part">
                <div className='restaurant'>
                    <h2>Restaurant details</h2>
                    <hr/>
                    <h4>{name}</h4>
                    <p>street:{street}</p>
                    <p>city:{city}</p>
                    <p>state:{state}</p>
                    <p>zipcode:{zipcode}</p>
                </div>
                <div className="order">
                    <h4>order</h4>
                    <hr />
                    <p>item:</p>
                    {items.map(item =>{
                        return(
                            <div className='order-item'>
                                <p>{item.name}</p>
                                <p className='quantity'>{item.quantity}</p>
                                <p className='price'>{item.currency} {item.price}</p>
                                <p className='tax'>{item.tax_pct}</p>
                                <p className='category'>{item.category}</p>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default OrderSummary
