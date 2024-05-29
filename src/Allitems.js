import React, { useEffect, useRef, useState } from 'react'
import Item from './Item';
import "./products.css"

export default function Allitems() {
    let titleref = useRef("");
    let brandref= useRef("");
    let thumbnailref= useRef("");
    let priceref =  useRef("");
    const [AllitemsElemets,setallitems] = useState();
    var Products = [
        {"id":1,
        "title":"iPhone 9",
        "description":"An apple mobile which is nothing like apple",
        "price":549,
        "discountPercentage":12.96,
        "rating":4.69,
        "stock":94,
        "brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]},
        {"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/2/1.jpg","https://cdn.dummyjson.com/product-images/2/2.jpg","https://cdn.dummyjson.com/product-images/2/3.jpg","https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"]},
        {"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/3/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"},
        {
            "id": 4,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "..."},
            {"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/5/thumbnail.jpg"},
            {"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"Apple","category":"laptops","thumbnail":"https://cdn.dummyjson.com/product-images/6/thumbnail.png"}
    ];
    
    const addItem=()=>
    {
        let i = {"title":titleref.current.value,
        "price":priceref.current.value,
        "thumbnail":thumbnailref.current.value,
        "brand":brandref.current.value};
        Products.push(i);
        showdata();
        titleref.current.value="";
        priceref.current.value="";
        thumbnailref.current.value="";
        brandref.current.value="";
    }
        
    const showdata = ()=>
    {
        var allItems= Products.map((i)=>
        {
            return <Item img={i.thumbnail} title={i.title} brand={i.brand} price={i.price} ></Item>
        })
        setallitems(allItems);
    }
    
    useEffect(()=>showdata(),[]);
  return (
    <>
    <div>
        <p>Title: <input type="text" ref={titleref}/></p>
        <p>Thumbnail:<input type="text" ref={thumbnailref}/></p>
        <p>brand:<input type="text" ref={brandref}/></p>
        <p>price:<input type="text" ref={priceref}/></p>
    <input type="button" value="Add Item"  onClick={addItem} />
    </div>
    <div className='itemmsContainer'>
        {AllitemsElemets}
    </div>
    
    </>
  )
  
}

