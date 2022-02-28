import './ListingList.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ListingCard from './ListingCard'
import Loader from '../elements/Loader'

const ListingList = ({listings, loading}) => {
  return (
    <>
        {
            loading 
            ?
                <Loader/>
            :
                <div className='columns is-flex-wrap-wrap'>
                    {
                        listings && listings.length 
                        ?
                            listings.map(listing => (
                                <div className='column is-12-mobile is-6-tablet is-4-desktop animate__animated animate__fadeIn' key={listing.id}>
                                    <ListingCard
                                        price={listing.price}
                                        images={listing.images}
                                        building={listing.building}
                                        street={listing.street}
                                        listingDate={listing.listing_date}
                                        sold={listing.sold}
                                        propertyType={listing.property_type}
                                        areaRangeStart={listing.area_range.start}
                                        areaRangeEnd={listing.area_range.end}
                                        bedrooms={listing.bedrooms}
                                        bathrooms={listing.bathrooms}
                                        parkingCount={listing.parkingCount}
                                        pinCode={listing.pin_code}
                                    />
                                </div>
                            ))
                        : <div className='column no-data'><p className='has-text-centered'>No Data Available</p></div>
                    }
                </div>
        }
    </>
  )
}

ListingList.propTypes = {
    listings: PropTypes.array.isRequired,
    loading: PropTypes.bool
}

ListingList.defaultProps = {
    loading: false
}

export default ListingList