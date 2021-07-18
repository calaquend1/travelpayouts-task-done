import React from 'react'
import ReactDOM from 'react-dom'
import './form.css'
import {DateInput, createProps} from './utils.js'

export const Form = (props) => {
  const defaultProps = createProps(props, props.locale)
  return (
    <div className='form' id='form'>
        <h1>{defaultProps.header}</h1>
        <p>{defaultProps.text}</p>
        <div className='buttonsBlock'>
          <DateInput placeholder={defaultProps.departPlaceholder} />
          <DateInput placeholder={defaultProps.returnPlaceholder} />
          <button className='search' id='searchButton'>{defaultProps.buttonText}</button> 
        </div>
    </div>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)