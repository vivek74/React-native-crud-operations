import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
    places: []
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
        return {
            ...state,
            places: state.places.concat({
                key: Math.random(), 
                name: action.placeName,
                image: {
                    uri: "https://data.whicdn.com/images/316789848/original.jpg?t=1532765695"
                }
            })
        };
        case DELETE_PLACE:
        return {
            ...state,
            places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
            }),
        };
        default:
        return state;
    }
};

export default reducer;