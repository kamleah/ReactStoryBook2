import React from 'react'
import PropTypes from 'prop-types'
import './LabelButton.css'
function LabelButton({LabelButtonImg,LabelButtonalt,LabelButtonText}) {
    return (
        <div className="LabelButton">
            <span><img src={LabelButtonImg} alt={LabelButtonalt} /><button>{LabelButtonText}</button></span>
        </div>
    )
}

LabelButton.propTypes = {

}

export default LabelButton

