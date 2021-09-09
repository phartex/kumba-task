import React,{useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/Customer.css'
import { Link } from 'react-router-dom'

import man from './man.jpg'

const CusomerProfile = () => {
    const [profile, setProfile] = useState({})
    const [person,setPerson]= useState({})
    const [likes, setLikes] = useState([])
    const [dislikes, setDislikes] = useState([])

    const fetchUrl='https://indapi.kumba.io/webdev/assignment'

    const fetchData =async ()=>{
        const response = await axios.get(fetchUrl)
        setProfile(response.data)
        setPerson(response.data.user)
        setLikes(response.data.user.likes)
        setDislikes(response.data.user.dislikes)
    }
    
 
    useEffect(()=>{
        fetchData()
    },[])

    const {name, id, address, phone,about,createdAt} = person
    return (
        <div className='main container-fluid'>
            <div class="main-part">
                    <img src={man} className='img-fluid img-round'/>
                    <div key={id}>
                        <h2>{name}</h2>
                        <p className='address'>{address}</p>
                        <p>{phone}</p>
                        <p>{about}</p>
                    </div>
               <div className='d-flex flex-row likes-container'>
               <h2>likes</h2>
                   {likes.map(like =>{
                       return (
                        <div>
                        <p className='likes'>{like}</p>
                        </div>
                       )
                   })}
               </div>
               <div className='d-flex flex-row likes-container'>
               <h2>dislikes</h2>
                   {dislikes.map(dislike =>{
                       return (
                        <div>
                        <p className='likes'>{dislike}</p>
                        </div>
                       )
                   })}
               </div>
               
               <p className='fixed-bottom sticky-bottom'><span><h3>created at</h3></span>{new Date().toLocaleString() + ''}</p>
            </div>
            <Link to='/OrderSummary' className='btn'>click to see your order</Link>
        </div>
    )
}

export default CusomerProfile
