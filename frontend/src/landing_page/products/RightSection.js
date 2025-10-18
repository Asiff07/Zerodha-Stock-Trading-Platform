import React from 'react';

function RightSection({productName, productDescription,learnMore,imageURL}) {
    return ( 
         <div className="container mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4 p-5 mt-5">
                    <h1 className='fs-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="col-6">
                    <img style={{width:"90%"}} src={imageURL} alt={"console"} />
                </div>
                
            </div>
        </div>
     );
}

export default RightSection;