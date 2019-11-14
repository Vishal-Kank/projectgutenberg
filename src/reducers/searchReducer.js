import { SEARCH_BOOK, FETCH_BOOK, CATEGORY } from '../actions/types';

const initialState = {
    text: '',
    books: [],
    next: '',
    previous: '',
    category: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_BOOK:
            return {
                ...state,
                text: action.payload
            }
        case CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_BOOK:
            return {
                ...state,
                books: action.payload.results,
                next: action.payload.next,
                previous: action.payload.previous
            }
        default:
            return state;
    }
}