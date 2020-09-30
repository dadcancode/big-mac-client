import React from 'react';
import Form from '../Form/Form';

const ClientCountry = (props) => {

    

    return (
        <div className='row bg-danger text-warning data-row'>
            <div className='col-12'>
                <h4>You live in: {props.ipLocation}</h4>
            </div>
            <div className='col-12'>
                <Form dollarAmt={props.dollarAmt} setDollarAmt={props.setDollarAmt} handleSubmit={props.handleSubmit} />
            </div>
        </div>
    )
}

export default ClientCountry;