import React from 'react';

function Hero() {
    return (
        <>
            <div style={{ backgroundColor: "#F6F6F6" }} className="container-fluid p-5">
                <div className="row mx-5">
                    <div className="col-4 px-5">
                        <h1>Support Portal</h1>
                    </div>
                    <div className="col-5"></div>
                    <div style={{ height: "2.5rem" }} className="col-3 px-5 d-flex justify-content-end">
                        <button className='btn btn-primary fw-medium'>My tickets</button>
                    </div>
                    <div className="row mt-3">
                        <div className='mb-3'>
                            <div className="mt-4 px-4">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text" id="basic-addon1">
                                        {/* Font Awesome Search Icon */}
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;