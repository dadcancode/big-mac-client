import React from 'react';

const LocalResults = (props) => {

    
    return (
        <div>
            <h4>Local Results</h4>
            {
                props.numOfMacs ?
                    <div>
                        <p>{`You can by ${props.numOfMacs} Big Mac(s) in your country`}</p>
                        <p>{`Your Dollar Purchase Parity (PPP) is: ${props.ppp}`}</p>
                    </div>
                    : null
            }

        </div>
    )
}

export default LocalResults;