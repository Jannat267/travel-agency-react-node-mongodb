import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
	const{loading}=useAuth();
	const [myOrders,setMyOrders]=useState([]);
	const {email}= useParams();
	// fetch data by email
	const url=`https://wicked-barrow-19021.herokuapp.com/orders/${email}`;

	useEffect(() => {
		fetch(url)
		.then(res=>res.json())
		.then(data=>setMyOrders(data))
    }, [])
		// delete order function
	const handleDeleteOrder=id=>{
		const confirm = window.confirm("Are you sure to delete?");
	   const url=`https://wicked-barrow-19021.herokuapp.com/orders/${id}`;
	   if(confirm)
	   {
		fetch(url,{
			method:'DELETE'
		})
		.then(res=>res.json())
		.then(data=>
		 {
			 if(data.deletedCount>0){
				 alert("deleted successfully")
				 const remainingOrders=myOrders.filter(order=>order._id!==id);
				 setMyOrders(remainingOrders);
				 window.location.reload(false);
			 }
		 })
	   }
	}
	return (
		<div className='container'>
			<div className="row d-none d-md-block">
			<div className="col ">
	<div className="card pt-3 shadow-lg h-100 bg-dark text-white  ">
  <div className="card-body ">
    <div className="row manage-order">
		<div className="col">
			<p>Customer Name</p>
		</div>
		<div className="col-3">
			<p>Email</p>
		</div>
		<div className="col">
			<p>Name</p>
		</div>
		<div className="col">
			<p>Order Status</p>
		</div>
		<div className="col-md-1">
			<p>Cancel</p>
		</div>
	</div>
  </div>
</div>
</div>
</div>
<div className='row row-cols-1'>
  					{
						myOrders.map(myorder => 
							<div>
						<div className="col">
						<div className="card pt-3 shadow-lg h-100">
						<div className="card-body">
						<div className="row manage-order">
							<div className="col">
							<p><span className="d-md-none">Customer name: </span>{myorder.name}</p>
							</div>
							<div className="col-md-3">
								<p><span className="d-md-none">Email: </span>{email}</p>
							</div>
							<div className="col">
								<p><span className="d-md-none">Plan Name: </span>{myorder.name}</p>
							</div>
							<div className="col">
								<p><span className="d-md-none">Order status: </span>{myorder.status}</p>
							</div>
						
							<div className="col-md-1 custom-btn-margin">
								<button onClick={() => handleDeleteOrder(myorder._id)} className="btn btn-danger ">X</button>
							</div>
						</div>

						</div>
						</div>
						</div>
                         </div>)
					}
					</div>
					{
                        loading&&
                        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
                    }
					
					</div>
					// <MyOrder key={myorder._id} myorder={myorder} delete='delete'></MyOrder>
	);
};

export default MyOrders;