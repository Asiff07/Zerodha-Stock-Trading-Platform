import React from 'react';

function NotFound() {
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className="row text-center">
                <h1 className='mt-5 mb-2 fs-3'>404 Not Found</h1>
                <p className='fs-5 text-muted'>Sorry, the page you are looking for doesn't exist</p>
            </div>
        </div>
    );
}

export default NotFound;