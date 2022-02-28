import './PropertyFilters.scss'
import React, { useContext, useState, useEffect } from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types'
import { GlobalContext } from '../../../store/GlobalState'
import { getFilteredListingsCountAPI } from '../../../services/ListingService'
import { property_types, enumerated_filter_values } from '../../../mockdata/listings'
import Button from '../elements/Button'
import Checkbox from '../elements/Checkbox'

const PropertyFilters = ({closeModal}) => {
    
    const { 
        filters,
        setFilters
    } = useContext(GlobalContext)

    const [local_filters, setLocalFilters] = useState(filters)
    const [results, setResultsCount] = useState(0)

    useEffect(() => {
        const getFilteredListingsCount = async () => {
            const results = await getFilteredListingsCountAPI(local_filters)
            setResultsCount(results)
        }
		getFilteredListingsCount()
	}, [local_filters])


    const updateFilters = (key, value) => {
        setLocalFilters({...local_filters, [key]: value})
    }

    const resetAppliedFilters = () => {
        setLocalFilters(filters)
        closeModal()
    }

    const applyListings = () => {
        setFilters(local_filters)
        closeModal()
    }

    const onPropertyTypeSelect = (e) => {
        const selected_type = e.target.name ? parseInt(e.target.name) : 0;
        if(selected_type){
            if(local_filters.property_type.includes(selected_type)){
                local_filters.property_type = local_filters.property_type.filter(property_type => property_type !== selected_type)
            } else {
                local_filters.property_type.push(parseInt(e.target.name))
            }
            setLocalFilters({...local_filters})
        }
    }

    return (
        <div className='property-filters'>
            <h3 className='is-size-5 has-text-weight-bold'>Apply Filters</h3>
            <h4 className='is-size-6 has-text-weight-bold'>Property Type</h4>
                {
                    Object.entries(property_types).map(([property_type_key, property_type_value]) => (
                        <p key={`property_type_${property_type_key}`}>
                            <Checkbox
                                onChange={onPropertyTypeSelect}
                                title={property_type_value}
                                checked={local_filters.property_type.includes(parseInt(property_type_key))}
                                name={property_type_key}
                            />
                        </p>
                    ))
                }
            {
                Object.entries(enumerated_filter_values).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <h4 className='is-size-6 has-text-weight-bold'>{key}</h4>
                            <div className='buttons'>
                                {
                                    value.map(filter_value => (
                                        <Button
                                            key={`${key}_${filter_value}`}
                                            title={`${filter_value === 0 ? 'Any' : `${filter_value}+`}`} 
                                            className={classnames('', {'is-primary': filter_value === local_filters[key], 'is-outlined': filter_value !== local_filters[key]})}
                                            type='button'
                                            onClick={() => {updateFilters(key, parseInt(filter_value))}}
                                        />
                                    ))
                                }
                            </div>
                        </React.Fragment>
                    )
                )
            }  
            <footer>
                <div className='buttons is-justify-content-flex-end'>
                    <Button
                        title='Cancel'
                        className='is-inverted'
                        type='button'
                        onClick={() => {resetAppliedFilters()}}
                    />
                    <Button
                        title={`View ${results} listings`}
                        className='is-primary'
                        type='button'
                        onClick={() => {applyListings()}}
                        disabled={!results}
                    />
                </div>
            </footer>
        </div>
    )
}

PropertyFilters.propTypes = {
    closeModal: PropTypes.func
}

PropertyFilters.defaultProps = {
    closeModal: () => {}
}

export default PropertyFilters