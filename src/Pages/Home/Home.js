import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Shared/Header/Header';
import Flight from '../Flights/Flight';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const{loading}=useAuth();
	const [flights, setFlights] = useState([])
    useEffect(() => {
        fetch('https://wicked-barrow-19021.herokuapp.com/flights')
            .then(res => res.json())
            .then(data => setFlights(data));
    }, [])

	return (
		<div>
			<div className="top-banner ">
			</div>
			<Header></Header>
            <section className='my-5'>
				<div className="container custom-card">
					<h1 className='text-center'>All Flights</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4">
                
					{
						flights.map(myevent => <Flight key={myevent._id} myevent ={myevent}></Flight> )
					}
                   {
                        loading&&
                        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
                    }
				</div>
				</div>
			</section>
			{/* faq section */}
			<section className="container my-5">
            <div className="d-flex justify-content-center">
                <h2 className="fw-bold fs-1 my-5">Frequently Asked<span className="text-info"> Questions</span></h2>
            </div>
            <div className="row fs-4">
                <div className="faq  col-md-12 col-sm-12">
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header  p-2" id="headingOne">
                                <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Do you accept card in payment?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes.We accept all kind of cards including visa,mastercard.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   When you are Open?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>We are 24/7 open for you to give the best services</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                   Do you also provide bus tickets?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                   <p>No we have only flight service available</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
		 {/* address details */}
		 <div className="my-5 container text-center">
                <h2 className="fw-bold text-center fs-1"> Our Office <span className='text-info'>Address</span></h2><br/>
                    <p>32/1 abc Narayanganj</p>
                    <div className="w-100 mx-auto">
                <iframe className="map" title='address' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58487.29069411582!2d90.4651421402569!3d23.623847109726785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755b0fb41e8c247%3A0xa02713a8af496e98!2sNarayanganj%20Sadar%20Upazila%2C%20Bangladesh!3m2!1d23.6237724!2d90.5001616!5e0!3m2!1sen!2sus!4v1625572409166!5m2!1sen!2sus"
                    width="100%" height="560" allowFullScreen="" loading="lazy"></iframe>
            </div>
            </div>
		</div>
	);
};

export default Home;