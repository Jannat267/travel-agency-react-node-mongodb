import React from 'react';
import { Link } from 'react-router-dom';
import './Flight.css';

const Flight = (props) => {
     const myevent=props.myevent;
     const dlt=props.delete;
	const {_id,name,img,description} = myevent;  
	return (
		<div>
			<div className="col">
	<div className="card hvr-grow h-100">
  <img src={img} className="card-img-top" alt="..."/>
  <div className={`card-body text-center`}>
    <h4 className="card-title ">{name}</h4>
    <p className="card-text ">{description}</p>
	<Link to={`/register/${name}`}>
	<button className='btn btn-info center'>Book</button>
	</Link>
  </div>
</div>

	
			</div>
		</div>
	);
};

export default Flight;