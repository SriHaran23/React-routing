import React from 'react'
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { Rating } from 'react-simple-star-rating'
import Rating from "@mui/material/Rating";


function Productitem(i) {
    var[item,setItem]=useState([""])
    var prdct=useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${prdct.id}`)
            .then(res=>res.json())
            .then(data=>setItem(data))
    },[prdct.id])
    console.log(prdct)
  return (
    <div className='d-flex justify-content-center'>
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <img src={item?.image} className="card-img-top" alt="..."/>
            </div>
            <div className="col-md-9 col-sm-12">
                <h5 className="fs-3 fw-bold">{item?.title}</h5>
                <p className='m-0'>{item?.category}</p>
                <p className="fs-5">{item?.price}</p>
                <p className="fs-5"><span className='align-self-center'>{item?.rating?.rate}</span><Rating precision={0.5} initialValue={item?.rating?.rate} max={5} />{/* <Rating         precision={0.5} initialValue={item?.rating?.rate}></Rating> */}</p>
                <p className="fs-5">{item?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Productitem