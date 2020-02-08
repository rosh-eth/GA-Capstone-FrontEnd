import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Title = () => {

    return (
        <div>
            <small className="d-block text-uppercase mt-3">Overview</small>
            <h3 className="d-inline">Lend & Earn</h3>
            <Link to="/"><Button className="d-inline float-right btn-primary">Connect</Button></Link>
            <hr />
        </div>
    )

};

export default Title;