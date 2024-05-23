import React from 'react'

export default function Item(props) {
  return (
    <>
    <div className='item'>
        <img src={props.img} style={{height:"100px",width:"100px"}}></img>
    <div className='productName'>{props.title}</div>
    
    <ul>
        <li>{props.brand} </li>
        <li>{props.brand} </li>
    </ul>
    <div className='productprice'>{props.price}</div>
    
    <input type="button" value="Show Details "></input>
    </div>
    </>
  )
}
