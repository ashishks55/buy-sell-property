import moment from 'moment'

export const property_types = {
    1: 'Detached Homes (0 shared walls)',
    2: 'Semi-Detached Homes (1 shared wall)',
    3: 'Townhouses (multi-level & shared walls)',
    4: 'Low Rise Condos (4 or fewer levels)',
    5: 'High Rise Condos (5 or more levels)'
}

export const default_filters = {
    property_type: '',
    min_price: 0,
    max_price: 0,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    min_sqft: 0,
    max_sqft: 0,
    city: ''
}

export const enumerated_filter_values = {
    bedrooms: [0, 1, 2, 3, 4, 5, 6],
    bathrooms: [0, 1, 2, 3, 4, 5, 6],
    parking: [0, 1, 2, 3, 4, 5, 6],
}

export const all_listings = [
    {
        id: 1,
        building: 'ICE Condominiums',
        street: '14 York St, Vancouver',
        city: 'Vancouver',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515631-1'
        ],
        price: 190876,
        area_range: {
            start: 234,
            end: 1500
        },
        parking: 1,
        bedrooms: 1,
        bathrooms: 1,
        sold: false,
        property_type: 1,
        featured: true
    },
    {
        id: 2,
        building: 'FIRE Condominiums',
        street: '12 St, Toronto',
        city: 'Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 649787,
        area_range: {
            start: 234,
            end: 9000
        },
        parking: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 2,
        featured: true
    },
    {
        id: 3,
        building: 'EARTH Condominiums',
        street: '14 St, Toronto',
        city: 'Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 889899,
        area_range: {
            start: 234,
            end: 1500
        },
        parking: 3,
        bedrooms: 3,
        bathrooms: 3,
        sold: false,
        property_type: 3,
        featured: true
    },
    {
        id: 4,
        building: 'AIR Condominiums',
        street: '12 St, Vancouver',
        city: 'Vancouver',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-1'
        ],
        price: 649787,
        area_range: {
            start: 234,
            end: 9000
        },
        parking: 4,
        bedrooms: 2,
        bathrooms: 4,
        sold: false,
        property_type: 4,
        featured: false
    },
    {
        id: 5,
        building: 'ICE Condominiums',
        street: '14 York St, Toronto',
        city: 'Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515631-1'
        ],
        price: 190876,
        area_range: {
            start: 234,
            end: 1500
        },
        parking: 4,
        bedrooms: 5,
        bathrooms: 6,
        sold: false,
        property_type: 2,
        featured: false
    },
    {
        id: 6,
        building: 'FIRE Condominiums',
        street: '12 St, Toronto',
        city: 'Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 649787,
        area_range: {
            start: 234,
            end: 9000
        },
        parking: 2,
        bedrooms: 6,
        bathrooms: 8,
        sold: false,
        property_type: 2,
        featured: false
    },
    {
        id: 7,
        building: 'EARTH Condominiums',
        street: '14 St, Vancouver',
        city: 'Vancouver',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 889899,
        area_range: {
            start: 234,
            end: 1500
        },
        parking: 1,
        bedrooms: 5,
        bathrooms: 2,
        sold: false,
        property_type: 3,
        featured: false
    },
    {
        id: 8,
        building: 'AIR Condominiums',
        street: '12 St, Toronto',
        city: 'Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-1'
        ],
        price: 649787,
        area_range: {
            start: 234,
            end: 9000
        },
        parking: 2,
        bedrooms: 1,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    }
]