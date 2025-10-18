import React from 'react';

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="education" style={{width:"75%"}}/>
                </div>
                <div className="col-6">
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading.</p>
                    <a style={{ textDecoration: "none" }} href="/">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a style={{ textDecoration: "none" }} href="/">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;