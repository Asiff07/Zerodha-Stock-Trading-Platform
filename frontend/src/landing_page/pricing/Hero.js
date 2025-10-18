import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-1 p-5 mb-5 border-bottom">
                <h2 className='mb-4 mt-5'>Charges</h2>
                <h4 className='text-muted fw-medium mb-5'>List of all charges and taxes</h4>
            </div>
            <div className="row px-4 text-center">
                <div className="col-4 mt-5 px-4">
                    <img style={{width:"70%",marginLeft:"1rem"}} src="media/images/pricing0.svg" alt="" />
                    <h1 className='mb-4 fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5">
                    <img style={{width:"70%",marginLeft:"1.5rem"}} src="media/images/intradayTrades.svg" alt="" />
                    <h1 className='mb-4 fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5">
                    <img style={{width:"70%",marginLeft:"1rem"}} src="media/images/pricing0.svg" alt="" />
                    <h1 className='mb-4 fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;