import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Input = ({value, name, type, onChange, placeholder, required, className, autoFocus, icon, hasIconRight}) => {
	return (
		<div className={`field ${className ? className : ''}`}>
			<p className={classnames('control', {'has-icons-right': hasIconRight, 'has-icons-left': !hasIconRight})}>
				<input 
					onChange={(e) => onChange(e.target.value, e.target.name)} 
					value={value} 
					name={name} 
					type={type} 
					placeholder={placeholder} 
					required={required} 
					className='input'
					autoFocus={autoFocus}
				/>
				{icon ?
					<span className={classnames('icon is-small', {'is-right': hasIconRight, 'is-left': !hasIconRight})}>
						<i className={icon}></i>
					</span>
				: null}
			</p>
		</div>
	)
}

Input.propTypes = {
	onChange: PropTypes.func.isRequired, 
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired, 
	required: PropTypes.bool,
	icon: PropTypes.string, 
	hasIconRight: PropTypes.bool,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	autoFocus: PropTypes.bool
}

Input.defaultProps = {
	hasIconRight: false,
	placeholder: '',
	className: '',
	required: false,
	autoFocus: false,
	type: 'text'
}

export default Input