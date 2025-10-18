import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-2">
            <div className="row text-center mt-5 p-3">
                <h1 className='fs-3'>Zerodha Products</h1>
                <h3 className='fw-normal mt-3 fs-5 tight-spacing'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-5'>Check out our <a className='fw-medium fs-6' style={{textDecoration:"none"}} href="/">investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;