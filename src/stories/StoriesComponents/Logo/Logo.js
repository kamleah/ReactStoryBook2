import React from 'react'
import PropTypes from 'prop-types'

function Logo({img,imgalt,backgroundColor}) {
    return (
            <div className="LogoSection" style={backgroundColor && {backgroundColor}}>
                <img src={img} alt={imgalt} />
            </div>
    )
}

Logo.propTypes = {
    img:PropTypes.string,
    imgalt:PropTypes.string,
    backgroundColor:PropTypes.string
}
Logo.defaultProps={
    img:"https://mlqk1lj70spp.i.optimole.com/_CM4LjY-jNyWhnzb/w:127/h:34/q:auto/https://idskart.com/wp-content/uploads/2020/09/New_log.png",
    imgalt:"Best Online Shopping",
    backgroundColor:null

}

export default Logo

