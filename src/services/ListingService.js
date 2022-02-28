import { all_listings } from '../mockdata/listings.js'

export const getAllListingsAPI = (filters) => new Promise((resolve, reject) => {
    if(!all_listings || !all_listings.length){
        return setTimeout(() => reject(new Error('Listings not found')), 250)
    }
    setTimeout(() => resolve(filterListings(all_listings, filters)), 250)
})

export const getFeaturedListingsAPI = () => new Promise((resolve, reject) => {
    if(!all_listings || !all_listings.length){
        return setTimeout(() => reject(new Error('Listings not found')), 250)
    }
    const featured_listings = all_listings.filter((listing) => listing.featured === true)
    setTimeout(() => resolve(featured_listings), 1000)
})

export const getFilteredListingsCountAPI = (filters) => new Promise((resolve, reject) => {
    if(!all_listings || !all_listings.length){
        return setTimeout(() => reject(new Error('Listings not found')), 250)
    }
    setTimeout(() => resolve(filterListings(all_listings, filters).length), 250)
})

const filterListings = (all_listings, filters) => {
    const filtered_listings = []
    all_listings.forEach(listing => {
        if(listing.bedrooms > filters.bedrooms && listing.bathrooms > filters.bathrooms  && listing.parking > filters.parking && (filters.property_type && filters.property_type.length ? filters.property_type.includes(listing.property_type) : true)){
            filtered_listings.push(listing)
        }
    })
    return filtered_listings
}
