import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration:"none"}} href="/">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row">
                        <div className="col-6 p-3 text-center border">
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and <br />direct mutual funds </p>
                        </div>
                        <div className="col-6 p-3 text-center border">
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;