import './SearchProperties.scss'
import React, { useState } from 'react'
import Input from '../elements/Input'
import Button from '../elements/Button'

const SearchProperties = () => {

	const [input, setInput] = useState('')

	const onChange = (input) => {
        setInput(input)
    }

	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={onSubmit} className='search-properties-form is-flex'>
			<Input
				onChange={onChange}
				value={input}
				name={'search'}
				required={true}
				icon={'fa-solid fa-location-dot'}
				placeholder='Where are you looking?'
			/>
			<Button
				title='Search' 
				className='is-success'
				type='submit'
				onClick={() => {}}
				icon={'fa-solid fa-magnifying-glass'}
			/>
		</form>
	)
}

export default SearchProperties