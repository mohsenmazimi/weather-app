import React from 'react';

const Spinner = ({message}) => {
    return(	<div className='ui active dimmer'>
    <div className='ui large text loader'>{message}</div>
    {/* <p></p>
    <p></p>
    <p></p> */}
  </div>)
}
Spinner.defaultProps = {
  message:'loading'
}
export default Spinner;