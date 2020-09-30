import React from 'react';
import Form from '../Form/Form';

const ClientCountry = (props) => {

    

    return (
        <div>
            <h4>Your IP: {props.clientIP}</h4>
            <h6>You live in: {props.ipLocation}</h6>
            <Form dollarAmt={props.dollarAmt} setDollarAmt={props.setDollarAmt} handleSubmit={props.handleSubmit} />
        </div>
    )
}

export default ClientCountry;