import React, {useState} from 'react';

const Form = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className='w-100'>
            <div className='form-group w-100'>
                {/* <label htmlFor='dollarAmt'>Enter dollar amount:</label> */}
                <input className='form-control' type='number' id='dollarAmt' placeholder='Enter Dollar Amount' onChange={(e) => {props.setDollarAmt(e.target.value)}}/>
            </div>            
            <button className='btn btn-outline-warning w-100' type='submit'>Enter</button>
        </form>
    )
}

export default Form;