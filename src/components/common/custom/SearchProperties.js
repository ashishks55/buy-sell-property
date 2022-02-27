import './SearchProperties.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../elements/Input'
import Button from '../elements/Button'

const SearchProperties = ({showFilters}) => {

	const [input, setInput] = useState('')

	const onChange = (input) => {
        setInput(input)
    }

	return (
		<div className='search-properties-form is-flex'>
			<Input
				onChange={onChange}
				value={input}
				name={'search'}
				required={true}
				icon={'fa-solid fa-location-dot'}
				placeholder='Where are you looking?'
			/>
			{showFilters ?
				<Button
					title='' 
					className='is-outlined'
					type='button'
					onClick={() => {}}
					icon={'fa-solid fa-filter'}
				/> 
			: null}
		</div>
	)
}

SearchProperties.propTypes = {
    showFilters: PropTypes.bool
}

SearchProperties.defaultProps = {
    showFilters: false
}

export default SearchProperties