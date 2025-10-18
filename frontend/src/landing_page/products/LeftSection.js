import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container border-top mt-4 mb-5">
            <div className="row mt-5 p-5">
                <div className="col-8">
                    <img src={imageURL} alt={"kite"} />
                </div>
                <div className="col-4 mt-5">
                    <h1 className='fs-3 mb-4'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a style={{ marginLeft: "70px" }} href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt={"google-play"} /></a>
                        <a style={{ marginLeft: "20px" }} href={appStore}><img src="media/images/appstoreBadge.svg" alt={"appstore"} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;