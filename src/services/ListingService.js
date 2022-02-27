import { all_listings } from '../mockdata/listings.js'

export const getAllListingsAPI = () => new Promise((resolve, reject) => {
    if(!all_listings || !all_listings.length){
        return setTimeout(() => reject(new Error('Listings not found')), 250)
    }
    setTimeout(() => resolve(all_listings), 250)
})

export const getFeaturedListingsAPI = () => new Promise((resolve, reject) => {
    if(!all_listings || !all_listings.length){
        return setTimeout(() => reject(new Error('Listings not found')), 250)
    }
    const featured_listings = all_listings.filter((listing) => listing.featured === true)
    setTimeout(() => resolve(featured_listings), 1000)
})
