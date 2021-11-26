import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

const Order = (props) => {
    //const [status,setStatus]=useState('');
    const order=props.order;
    
    const{_id,name,title,date,email,address,description,status}=order;
    const history=useHistory();
   //const {_id,name,img} = myorder;
   const handleDeleteOrder=id=>{
    const confirm = window.confirm("Are you sure to delete?");
   const url=`https://wicked-barrow-19021.herokuapp.com/orders/${id}`;
   if(confirm){
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    alert("Order Cancelled");
    //window.location.reload(false);
   }
}
   const handleUpdateOrder=id=>{
    console.log("update  hit",id);
   const url=`https://wicked-barrow-19021.herokuapp.com/orders/${id}`;
   fetch(url,{
       method:'PUT'
   })
   .then(res=>res.json())
   .then(data=>
    {
        
    })
    //history.push('./home');
    alert("Order Confirmed");
    
}
   const bg = [
       "primary",
       "secondary",
       "danger",
       "success",
       "info",

   ];
   const randomBg = bg[Math.floor(Math.random() * 5)];
    return (
        <div>
            
        <div className="col">
<div className="card pt-3 shadow-lg h-100">
<div className="card-body">
<div className="row manage-order">
    <div className="col">
    <p><span className="d-md-none">Customer name: </span>{name}</p>
    </div>
    <div className="col-md-3">
        <p><span className="d-md-none">Email: </span>{email}</p>
    </div>
    <div className="col">
        <p><span className="d-md-none">Plan Name: </span>{name}</p>
    </div>
    <div className="col">
        <p><span className="d-md-none">Order status: </span>{status}</p>
    </div>
    <div className="col-md-2">
        {
            status==="Active"&&
            <button disabled onClick={() => handleUpdateOrder(order._id)} className="btn btn-warning custom-btn-position mx-2">Confirmed</button>
        }
        {
            status==="pending"&&
            <button  onClick={() => handleUpdateOrder(order._id)} className="btn btn-warning custom-btn-position">Confirm</button>
        }
    </div>
    <div className="col-md-1 custom-btn-margin">
        <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger ">X</button>
    </div>
</div>

</div>
</div>
</div>
   
        </div>
    );
};

export default Order;