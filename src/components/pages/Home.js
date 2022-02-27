import './Home.scss'
import React from 'react'
import SearchProperties from '../common/custom/SearchProperties';

const Home = () => {
	return (
		<section className='hero is-large is-link'>
			<div className='hero-body'>
				<p className='title animate__animated animate__fadeInDown'>
					Looking for your next Home?
				</p>
				<p className='subtitle animate__animated animate__fadeInDown animate__delay-1s'>
					See the most recent listings, book same-day tours, and get an estimate on the sale price of each home.
				</p>
				<div className="animate__animated animate__fadeInDown animate__delay-2s">
					<SearchProperties/>
				</div>
			</div>
		</section>
	)
}

export default Home