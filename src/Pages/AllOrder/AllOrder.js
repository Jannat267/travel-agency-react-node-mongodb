import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MyOrder from '../MyOrder/MyOrder';
import Order from '../Order/Order';

const MyOrders = () => {
	const [orders,setOrders]=useState([]);
	const {email}= useParams();
	// all order url
	const url=`https://wicked-barrow-19021.herokuapp.com/orders/`;

	useEffect(() => {
		fetch(url)
		.then(res=>res.json())
		.then(data=>setOrders(data))
    }, [])
		
		
	return (
		<div className="container">
			<div className="row">
				{/* call order component */}
					{
						orders.map(order => <Order key={order._id} order={order} ></Order> )
					}
				</div>
		</div>
	);
};

export default MyOrders;