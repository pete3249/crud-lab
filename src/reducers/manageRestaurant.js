import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const r = { text: action.text, id: cuid() }
            return {
                ...state, 
                restaurants: [...state.restaurants, r]
            }
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(r => r.id !== action.id)
            return { ...state, restaurants }
        case 'ADD_REVIEW':
            const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}
            return {
                ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(r => r.id !== action.id)
            return {
                ...state, 
                restaurants: [...state.restaurants],
                reviews: reviews
            }
        default:
            return state
    }
}