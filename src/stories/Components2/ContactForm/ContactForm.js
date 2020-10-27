import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Inputs/Input'
import Label from '../Label/Label'
function ContactForm(props) {
    return (
        <div className="ContactForm">
            <Label text="Phone Number*" />
            <Input  placeholder="Enter Phone Number" />
            <Label  text="Full Name"/>
            <Input  placeholder="Enter Full Name" />
            <Label text="Password" />
            <Input type="password" placeholder="Enter Password" />
        </div>
    )
}

ContactForm.propTypes = {

}

export default ContactForm

