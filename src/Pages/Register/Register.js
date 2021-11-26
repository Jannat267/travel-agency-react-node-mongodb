import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const {user,logOut} = useAuth();
	const email=user.email;
	const {myeventId} = useParams();

	const {register,handleSubmit, reset} = useForm();
	
	const onSubmit = data => {
        axios.post(`https://wicked-barrow-19021.herokuapp.com/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			<div className="container my-3">
			<h1 className="text-center">
				Book Tickets for {myeventId} Flight</h1>
			</div>
			<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
			<input className="form-control mb-3" type="text" {...register("title")} value={myeventId} />
                
                <input type="email" className="form-control mb-3" {...register("email")} value={email} />
				<input className="form-control mb-3" {...register("name")} placeholder="Full Name" />
                <input type="text" className="form-control mb-3" {...register("address")} placeholder="address" />

				<input className="form-control mb-3" {...register("phone")} placeholder="Phone" type='number'/>

				<input className="form-control mb-3" type="date" {...register("date")}  />

                <input className="btn btn-primary"  type="submit" value="Submit" />
            </form>
			</div>
		</div>
	);
};

export default Register;