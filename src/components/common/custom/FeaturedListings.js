import './FeaturedListings.scss'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router";
import { getFeaturedListingsAPI } from '../../../services/ListingService'
import ListingList from './ListingList'
import Button from '../elements/Button';

const FeaturedListings = () => {

	const [listings, setListings] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate();

	useEffect(() => {
		getFeaturedListings()
	}, [])

	const getFeaturedListings = async () => {
		const listings = await getFeaturedListingsAPI()
		setListings(listings)
		setLoading(false)
	}

	const goToListings = () => {
		navigate('/listings')
	}

	return (
		<div className='featured-listings'>
			<h3 className='is-size-4 has-text-weight-bold'>Featured Listings</h3>
			<ListingList 
				loading={loading}
				listings={listings}
			/>
			{
				loading 
				? null 
				:
					<div className="has-text-centered see-more">
						<Button
							title='See More' 
							className='is-primary'
							type='button'
							onClick={goToListings}
						/>
					</div>
			}
		</div>
	)
}

export default FeaturedListings