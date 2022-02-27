import './SearchProperties.scss'
import React, { useState } from 'react'
import Input from '../elements/Input'
import Button from '../elements/Button'

const SearchProperties = () => {

	const [input, setInput] = useState('');

	const onChange = (input) => {
        setInput(input);
    }

	return (
		<form className="search-properties-form is-flex">
			<Input
				onChange={onChange}
				value={input}
				name={'search'}
				required={true}
				autoFocus={true}
				icon={'fa-solid fa-location-dot'}
				placeholder='Where are you looking?'
			/>
			<Button
				title='Search' 
				className='is-success'
				type='submit'
				onClick={() => {}}
				disabled={!input}
				icon={'fa-solid fa-magnifying-glass'}
			/>
		</form>
	)
}

export default SearchProperties