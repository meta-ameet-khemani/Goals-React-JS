import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, bgColor, onClick}) => {
    return <button onClick={onClick} style={{ backgroundColor: bgColor, color: 'white' }}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    bgColor: 'black'
}

export default Button
