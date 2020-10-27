import React from 'react'
import PropTypes from 'prop-types'

function Input({type,placeholder}) {
    return (
        <div>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

Input.propTypes = {

}

export default Input

