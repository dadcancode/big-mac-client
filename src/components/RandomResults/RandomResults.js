import React from 'react';
import { calculateRandomMacs, exchangeAmout } from '../../services/IPServices';

const RandomResults = (props) => {



    return (
        <div className='row bg-danger text-warning data-row'>
            <div className='col-12 h-25'>
                <h4>Random Results</h4>
            </div>
            {
                props.randCountry.Country ?
                    <div className='col-12 d-flex h-75 justify-content-center'>
                        <div className='row w-100 justify-content-around align-self-center h-100'>
                            <div className='col-10 d-flex justify-content-center align-items-center'>Random Country: <span>{`${props.randCountry.Country}`}</span></div>
                            <div className='col-10 d-flex justify-content-center align-items-center'>You could buy <span>{`${calculateRandomMacs(props.dollarAmt, props.localLocalPrice, props.localDollarprice, props.randCountry.Dollarprice)}`}</span> Big Mac(s) in <span>{`${props.randCountry.Country}`}</span> with $<span>{`${props.dollarAmt}`}</span>!</div>
                            <div className='col-10 d-flex justify-content-center align-items-center'>Your $<span>{`${props.dollarAmt}`}</span> is worth about $<span>{`${exchangeAmout(props.dollarAmt, props.localDollarprice, props.randCountry.Dollarprice)}`}</span> in <span>{`${props.randCountry.Country}`}</span></div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}


export default RandomResults;