import './ListingCard.scss'
import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { property_types } from '../../../mockdata/listings'

const ListingCard = ({
    price,
    images, 
    building, 
    street, 
    listingDate, 
    sold, 
    propertyType, 
    areaRangeStart, 
    areaRangeEnd, 
    bedrooms, 
    bathrooms, 
    parkingCount,
    pinCode
}) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <figure className='image is-4by3'>
                <img src={images[0]} alt={building}/>
            </figure>
        </div>
        <div className='card-content'>
            <p className="is-flex is-justify-content-space-between is-align-items-center">
                <span className='price'>${price.toLocaleString('en-US')}</span>
                <span className='date has-text-grey'>Listed on {moment.unix(listingDate).format('DD MMM YYYY')}</span>
            </p>
            <p className="specs">
                <span className='area'>{areaRangeStart}-{areaRangeEnd} sqft</span>
                <span className='beds'>{bedrooms} bd</span>
                <span className='bathrooms'>{bathrooms} ba</span>
                <span className='parking'>{parkingCount} prkg</span>
            </p>
            <p className='type has-text-link'>{property_types[propertyType]}</p>
            <p className='address has-text-grey'>{building}, {street} - {pinCode}</p>
        </div>
    </div>
  )
}

ListingCard.propTypes = {
    price: PropTypes.number.isRequired,
	images: PropTypes.array.isRequired, 
	building: PropTypes.string.isRequired,
	street: PropTypes.string.isRequired, 
	listingDate: PropTypes.number.isRequired, 
	sold: PropTypes.bool.isRequired,
	propertyType: PropTypes.number.isRequired,
    pinCode: PropTypes.string.isRequired,
	areaRangeStart: PropTypes.number,
    areaRangeEnd: PropTypes.number,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    parkingCount: PropTypes.number
}

ListingCard.defaultProps = {
	areaRangeStart: 0,
    areaRangeEnd: 0,
    bedrooms: 0,
    bathrooms: 0,
    parkingCount: 0
}

export default ListingCard