import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (<div className="container">
        <div className="row"><h1 className>Page not Found Click</h1>  <Link className="mt-3" style={{ fontSize: '30px' }} to="/">Go Back Home</Link></div>
    </div>);
}

export default NotFound;