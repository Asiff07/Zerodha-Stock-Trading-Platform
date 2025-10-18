import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>Zerodha is the largest and most popular stock broker in India. We have over 6 million clients using our platform to invest and trade in stocks, mutual funds, bonds, and more.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Future Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img style={{width:"90%"}} src="/media/images/pressLogos.png" alt="PressLogo" />
                </div>
            </div>
        </div>
    );
}

export default Awards;