import React from 'react';
import Form from '../Form/Form';

const ClientCountry = (props) => {

    

    return (
        <div className='row bg-danger text-warning data-row'>
            <div className='col-12 h-25 d-flex align-items-center'>
                <h4>You live in: {props.ipLocation}</h4>
            </div>
            <div className='col-12 h-75 d-flex justify-content-center align-items-center'>
                <Form dollarAmt={props.dollarAmt} setDollarAmt={props.setDollarAmt} handleSubmit={props.handleSubmit} />
            </div>
        </div>
    )
}

export default ClientCountry;