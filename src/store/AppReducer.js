const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FILTERS':
            return {
                ...state,
                filters: {...action.payload}
            }
        case 'RESET_FILTERS':
            return {
                filters: {
                    ...action.payload.filters,
                    property_type: []
                }
            }
        default: 
            return;
    }
}

export default reducer;