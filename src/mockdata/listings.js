import moment from 'moment'

export const property_types = {
    1: 'Detached Homes (0 shared walls)',
    2: 'Semi-Detached Homes (1 shared wall)',
    3: 'Townhouses (multi-level & shared walls)',
    4: 'Low Rise Condos (4 or fewer levels)',
    5: 'High Rise Condos (5 or more levels)'
}

export const all_listings = [
    {
        id: 1,
        building: 'ICE Condominiums',
        street: '14 York St, Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515631-1'
        ],
        price: 190876,
        area_range: {
            start: 1234,
            end: 1500
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: true
    },
    {
        id: 2,
        building: 'FIRE Condominiums',
        street: '12 St, Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 649787,
        area_range: {
            start: 1234,
            end: 9000
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: true
    },
    {
        id: 3,
        building: 'EARTH Condominiums',
        street: '14 St, Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 889899,
        area_range: {
            start: 1234,
            end: 1500
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: true
    },
    {
        id: 4,
        building: 'AIR Condominiums',
        street: '12 St, Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-1'
        ],
        price: 649787,
        area_range: {
            start: 1234,
            end: 9000
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    },
    {
        id: 5,
        building: 'ICE Condominiums',
        street: '14 York St, Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515631-1'
        ],
        price: 190876,
        area_range: {
            start: 1234,
            end: 1500
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    },
    {
        id: 6,
        building: 'FIRE Condominiums',
        street: '12 St, Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 649787,
        area_range: {
            start: 1234,
            end: 9000
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    },
    {
        id: 7,
        building: 'EARTH Condominiums',
        street: '14 St, Toronto',
        pin_code: 'ON M5J 2Z2',
        listing_date: moment().subtract(10, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-2'
        ],
        price: 889899,
        area_range: {
            start: 1234,
            end: 1500
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    },
    {
        id: 8,
        building: 'AIR Condominiums',
        street: '12 St, Toronto',
        pin_code: 'ON M5J 0A9',
        listing_date: moment().subtract(9, 'days').unix(),
        images: [
            'https://images.goproperly.com/toronto-on-ca-W5515600-1',
            'https://images.goproperly.com/toronto-on-ca-W5515600-1'
        ],
        price: 649787,
        area_range: {
            start: 1234,
            end: 9000
        },
        parking_count: 2,
        bedrooms: 2,
        bathrooms: 2,
        sold: false,
        property_type: 1,
        featured: false
    }
]