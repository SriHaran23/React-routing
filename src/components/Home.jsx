import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Productitem from './Productitem'

function Home() {
    var [product, setProduct] =useState([""])
    useEffect (()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        },[])
    return(
        <div>
            <div className='d-flex flex-wrap'>
            {
                product && product.map((p, i)=>{
                    return <div className='w-25 p-4 border border-2'> 
                    <img src={p?.image} alt="" width="280px" height="300px" />
                    <h4><Link to={`/item/${p.id}`} >{p?.title}</Link></h4>
                    </div>
                })
            }
            </div>
        </div>
  )
}

export default Home