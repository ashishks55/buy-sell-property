import './Listings.scss'
import React, {useState, useEffect, useContext} from 'react'
import {GlobalContext} from '../../store/GlobalState'
import ListingList from '../common/custom/ListingList'
import { getAllListingsAPI } from '../../services/ListingService'
import SearchProperties from '../common/custom/SearchProperties';

const Listings = () => {

	const { filters } = useContext(GlobalContext)
	const [listings, setListings] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getAllListings = async () => {
			const listings = await getAllListingsAPI(filters)
			setListings(listings)
			setLoading(false)
		}
		getAllListings()
	}, [filters])

	return (
		<section className='section'>
			<SearchProperties
				showFilters={true}
			/>
			<h3 className='is-size-4 has-text-weight-bold listing-heading'>Listings</h3>
			<ListingList
				loading={loading}
				listings={listings}
			/>
		</section>
	)
}

export default Listings
