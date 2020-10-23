import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'
function Input({type,placeholder,value}) {
    return (
        <div className="InputDiv">
            <input className="SearchInput" type={type} placeholder={placeholder} value={value}/>
        </div>
    )
}

Input.propTypes = {
    type:PropTypes.oneOf(['text', 'search', 'number']),
    placeholder:PropTypes.string,
    value:PropTypes.string
}

export default Input

