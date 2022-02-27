import React, {useState, useEffect} from 'react'
import { getFeaturedListings } from '../../../services/ListingService'

const FeaturedListings = () => {

	const [listings, setListings] = useState([]);

	useEffect(() => {
		let mounted = true;
		getFeaturedListings()
			.then(listings => {
				if(mounted) {
					setListings(listings)
				}
			})
		return () => mounted = false;
	}, [])

	return (
		<div className='featured-listings'>
			<h3 className='is-size-4 has-text-weight-bold'>Featured Listings</h3>
			{
				listings.map(listing => (
					<div className="listing" key={listing.id}>
					</div>
				))
			}
		</div>
	)
}

export default FeaturedListings