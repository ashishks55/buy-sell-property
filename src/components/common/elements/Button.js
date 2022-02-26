import React from 'react'
import PropTypes from "prop-types"

const Button = ({title, onClick, className, icon, hasIconRight, children}) => {
  return (
    <button className={`button ${className ? className : ''}`} onClick={onClick}>
        {title ? <span>{title}</span> : ''}
        {icon ? <span className="icon"><i className={icon}>i</i></span> : ''}
        {children ? children : ''}
    </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired, 
    title: PropTypes.string,
    className: PropTypes.string, 
    icon: PropTypes.string, 
    hasIconRight: PropTypes.bool,
    children: PropTypes.node
}

export default Button