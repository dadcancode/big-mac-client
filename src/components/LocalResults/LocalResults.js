import React from 'react';
import { calculateMacs } from '../../services/AppServices';


const LocalResults = (props) => {

    
    return (
        <div className='row bg-info text-dark data-row'>
            <div className='col-12 h-25 d-flex align-items-center'>
                <h4>Local Results</h4>
            </div>
            {
                props.randCountry.Country ?
                    <div className='col-12 d-flex h-75 justify-content-center'>
                        <div className='row w-100 justify-content-around h-100'>
                            <div className='col-5 d-flex flex-column align-items-center justify-content-between'>You can buy <span>{`${calculateMacs(props.dollarAmt, props.macData.Localprice)}`}</span> Big Mac(s) in your country</div>
                            <div className='col-5 d-flex justify-content-center align-items-center'>Your Dollar Purchase Parity (PPP) is: <span>{`${props.ppp}`}</span></div>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}

export default LocalResults;