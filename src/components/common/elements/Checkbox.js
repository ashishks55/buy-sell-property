import './Checkbox.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({title, checked, onChange, name}) => {
  return (
    <label className='checkbox'>
        <input type='checkbox' checked={checked} onChange={onChange} name={name}/>
        {title}
    </label>
  )
}

Checkbox.propTypes = {
	onChange: PropTypes.func.isRequired, 
	title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
	name: PropTypes.string
}

Checkbox.defaultProps = {
	name: ''
}

export default Checkbox