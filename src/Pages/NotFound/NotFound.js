import React from 'react';
import img from '../../images/404.jpg'

const NotFound = () => {
	return (
		<div>
			<div className="container my-5">

<div className="text-center">
<img className="img-fluid" src={img} alt="" />

<h1 className="my-5 text-dark">Page Not Found</h1>
</div>

	</div>
		</div>
	);
};

export default NotFound;