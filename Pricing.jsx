import React from 'react';
import {Link} from 'react-router-dom';


const  Pricing= () => {
  return (
    <React.Fragment>
    <div>
      <h1 className='text-center my-4'>Our Pricing plans</h1>
    </div>
    <div className="container">
      <div className='row'>
       <div className="col-md-4 mb-4">
        <div className='card h-100'>
        <Link to="/"><img className='card-img-top' src="http://placehold.it/700x400" alt="one" />
          <div className='card-body'>
            <h4 className='card-title'>
             <Link to="/pricing">Item One</Link>
            </h4>
            <h4>$249.99</h4>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita quaerat beatae ad suscipit ratione.</p>
          </div>
        </Link>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className='card h-100'>
        <Link to="/"><img className='card-img-top' src="http://placehold.it/700x400" alt="two" />
          <div className='card-body'>
            <h4 className='card-title'>
             <Link to="#">Item One</Link>
            </h4>
            <h4>$289.99</h4>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita quaerat beatae ad suscipit ratione.</p>
          </div>
        </Link>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className='card h-100'>
        <Link to="/"><img className='card-img-top' src="http://placehold.it/700x400" alt="three" />
          <div className='card-body'>
            <h4 className='card-title'>
             <Link to="/features">Item One</Link>
            </h4>
            <h4>$299.99</h4>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita quaerat beatae ad suscipit ratione.</p>
          </div>
        </Link>
      </div>
    </div>
    </div>
    </div>
    </React.Fragment>
   );
}
export default Pricing;