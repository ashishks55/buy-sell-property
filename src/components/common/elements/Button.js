import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, onClick, className, icon, children, type, disabled}) => {
return (
	<button className={`button ${className ? className : ''}`} onClick={onClick} type={type} disabled={disabled}>
		{icon ? <span className="icon"><i className={icon}></i></span> : ''}
		{title ? <span>{title}</span> : ''}
		{children ? children : ''}
	</button>
)
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired, 
	title: PropTypes.string,
	className: PropTypes.string, 
	icon: PropTypes.string, 
	children: PropTypes.node,
	type: PropTypes.string,
	disabled: PropTypes.bool
}

Button.defaultProps = {
	className: '',
	type: 'button',
	disabled: false
}

export default Button