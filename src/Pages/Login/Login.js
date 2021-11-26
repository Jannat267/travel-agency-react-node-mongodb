import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {

	const {signInUsingGoogle, logOut,user} = useAuth();
	const history = useHistory();

	const location = useLocation();
    

	//redirect to location

	const redirect_uri = location.state?.from || '/home';

	const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

	return (
		<div className='container text-center '>
			<div className='border border-primary w-75 mx-auto p-4'>
			<h1 className='fw-bold my-2'>Please Login...</h1> 
			<button onClick={handleGoogleLogin} className='btn btn-light px-3 rounded-pill border border-primary m-2'>Login with google</button><br />
			
			<button onClick={logOut} className='btn btn-danger m-4'>Logout</button>
			</div>
		</div>
	);
};

export default Login;