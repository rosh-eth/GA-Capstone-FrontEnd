import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Statement = () => {

    const style = {
        'background-image': "url('https://instadapp.io/img/illustrations/illustration-3-cropped.png'), url('https://instadapp.io/img/illustrations/illustration-1-cropped.png')",
        'background-repeat': 'no-repeat'
    }

    return (
        <div>
            <Jumbotron className="text-center my-5 py-5" style={style}>
                <h3 className="font-weight-normal">DeFi is complex. Just Use InstaDApp</h3>
                <h5 className="text-muted font-weight-light py-3 ">
                We can help you manage your wealth better on blockchain.
                </h5>

                <Link to="/dashboard"><Button variant="primary mr-3 ">Get Started</Button></Link>

            </Jumbotron>
            
        </div>
    )

}

export default Statement;