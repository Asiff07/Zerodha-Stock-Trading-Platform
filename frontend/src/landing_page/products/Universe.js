import React from 'react';

function Universe() {
    return (
        <div className="container">
            <div className="row text-center p-5">
                <h1 className='fs-4 mt-4 mb-4'>The Zerodha Universe</h1>
                <p className='mb-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row px-5">
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/zerodhaFundHouse.png" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/sensibullLogo.svg" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </div>
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/goldenpiLogo.png" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'> Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/streakLogo.png" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.

                        </p>
                    </div>
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/smallcaseLogo.png" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4 mt-5 px-5">
                        <img style={{ width: "70%" }} src="media/images/dittoLogo.png" alt="" />
                        <p style={{ fontSize: "13px" }} className='text-muted mt-3 px-2'>Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free
                        </p>
                    </div>
                </div>
                <button className='p-2 btn btn-primary fs-5 fw-medium mt-4' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;