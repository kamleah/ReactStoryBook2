import React from 'react'
import PropTypes from 'prop-types'

function Label({text,labelFor}) {
    return (
        <div>
            <label className="" for={labelFor}>{text}</label>
        </div>
    )
}

Label.propTypes = {

}

export default Label

