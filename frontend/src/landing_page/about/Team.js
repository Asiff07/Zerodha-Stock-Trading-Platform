import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h1 className='fs-3 text-center fw-semi-bold mt-5'>People</h1>
            </div>

            <div className="row p-5 text-muted px-5" style={{ lineHeight: "1.5", fontSize: "1.1em" }}>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
                    <img 
                        className="rounded-circle mb-3" 
                        src="/media/images/profile.png" 
                        alt="Developer" 
                        style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover"
                        }}
                    />
                    <h3 className="fw-semibold mt-2">Sk Asif Ahmed</h3>
                    <h5 className="text-secondary">Developer</h5>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <p className="text-muted mb-3">
                        Hey! I’m <strong>Asif Ahmed</strong>, a full-stack web developer who loves turning ideas into real products.
                    </p>
                    <p className="text-muted mb-3">
                        This <strong>Zerodha Clone</strong> is one of my learning projects where I recreated the look and feel of the Zerodha trading platform using 
                        <strong> React, Node.js, and MongoDB</strong>.
                    </p>
                    <p className="text-muted mb-4">
                        It helped me understand how trading apps work behind the scenes — from authentication to order flow and dashboard UI.
                    </p>

                    <h5 className="fw-semibold mb-3 text-dark">Connect me on</h5>
                    <div className="d-flex align-items-center gap-4 fs-4">
                        <a href="https://github.com/Asiff07" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://x.com/skasif_ahmed1" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/skasifahmed/" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
