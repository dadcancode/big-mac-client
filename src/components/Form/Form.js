import React, {useState} from 'react';

const Form = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor='dollarAmt'>Enter dollar amount:</label>
                <input type='number' id='dollarAmt' value={props.dollarAmt} onChange={(e) => {props.setDollarAmt(e.target.value)}}/>
                <button type='submit'>Enter</button>
            </form>
        </div>
    )
}

export default Form;