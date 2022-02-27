import './SearchProperties.scss'
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../store/GlobalState'
import PropTypes from 'prop-types'
import useDebounce from '../../utils/useDebounce'
import PropertyFilters from './PropertyFilters'
import Modal from '../elements/Modal'
import Input from '../elements/Input'
import Button from '../elements/Button'


const SearchProperties = ({showFilters}) => {

	const {filters, setFilters, resetFilters} = useContext(GlobalContext)

	const [input, setInput] = useState(filters.city)
	const [filter_modal_open, setModalState] = useState(false)

	const updateSearch = useDebounce(city => {
		setFilters({...filters, city})
	}, 500);

	useEffect(() => {
        setInput(filters.city)
	}, [filters.city])

	const onChange = (input) => {
        setInput(input)
		updateSearch(input)
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
				<>
					<Button
						title='Add Filters' 
						className='is-outlined'
						type='button'
						onClick={() => {setModalState(true)}}
						icon={'fa-solid fa-filter'}
					/> 
					<Button
						title='Clear All' 
						className='is-primary is-inverted' 
						type='button'
						onClick={() => {resetFilters()}}
					/>
				</>
			: null}
			<Modal
				modalActive={filter_modal_open}
				closeModal={() => {setModalState(false)}}
			>
				<PropertyFilters
					closeModal={() => {setModalState(false)}}
				/>
			</Modal>
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