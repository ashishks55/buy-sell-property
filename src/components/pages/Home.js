import './Home.scss'
import React from 'react'
import SearchProperties from '../common/custom/SearchProperties';
import FeaturedListings from '../common/custom/FeaturedListings';

const Home = () => {
	return (
		<>
			<section className='hero is-large is-link'>
				<div className='hero-body'>
					<h2 className='title animate__animated animate__fadeInDown'>
						Looking for your next Home?
					</h2>
					<p className='subtitle animate__animated animate__fadeInDown animate__delay-1s'>
						See the most recent listings, book same-day tours, and get an estimate on the sale price of each home.
					</p>
					<div className='animate__animated animate__fadeInDown animate__delay-2s'>
						<SearchProperties/>
					</div>
				</div>
			</section>
			<section className='section'>
				<FeaturedListings/>
			</section>
		</>
	)
}

export default Home