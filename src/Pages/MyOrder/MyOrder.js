import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = (props) => {
    const myorder=props.myorder;
    const{_id,name,title,date,email,address,description}=myorder;
    const dlt=props.delete;
   //const {_id,name,img} = myorder;
   const handleDeleteOrder=id=>{
    console.log("delete hit",id);
   const url=`https://wicked-barrow-19021.herokuapp.com/orders/${id}`;
   fetch(url,{
       method:'DELETE'
   })
   .then(res=>res.json())
   .then(data=>
    {
        if(data.deletedCount>0){
            alert("deleted successfully")
        }
    })
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
        <tr>

    
      <th >{name}</th>
      <td>{address}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td><button className='btn btn-danger' onClick={()=>handleDeleteOrder(_id)}>X</button></td>
  
  

        
    </tr>
    );
};

export default MyOrder;