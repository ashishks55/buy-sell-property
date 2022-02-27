import './Listings.scss'
import React, {useState, useEffect} from 'react'
import ListingList from '../common/custom/ListingList'
import { getAllListingsAPI } from '../../services/ListingService'
import SearchProperties from '../common/custom/SearchProperties';

const Listings = () => {

	const [listings, setListings] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getAllListings()
	}, [])

	const getAllListings = async () => {
		const listings = await getAllListingsAPI()
		setListings(listings)
		setLoading(false)
	}

	return (
		<section className='section'>
			<SearchProperties
				showFilters={true}
			/>
			<h3 className='is-size-4 has-text-weight-bold'>Listings</h3>
			<ListingList
				loading={loading}
				listings={listings}
			/>
		</section>
	)
}

export default Listings
