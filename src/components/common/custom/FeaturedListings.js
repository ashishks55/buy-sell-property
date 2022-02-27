import React, {useState, useEffect} from 'react'
import { getFeaturedListingsAPI } from '../../../services/ListingService'
import ListingList from './ListingList'

const FeaturedListings = () => {

	const [listings, setListings] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getFeaturedListings()
	}, [])

	const getFeaturedListings = async () => {
		const listings = await getFeaturedListingsAPI()
		setListings(listings)
		setLoading(false)
	}

	return (
		<div className='featured-listings'>
			<h3 className='is-size-4 has-text-weight-bold'>Featured Listings</h3>
			<ListingList 
				loading={loading}
				listings={listings}
			/>
		</div>
	)
}

export default FeaturedListings