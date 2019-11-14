import { SEARCH_BOOK, FETCH_BOOK, CATEGORY } from './types';

export const searchBook = text => (dispatch) => {
    dispatch({
        type: SEARCH_BOOK,
        payload: text
    });
};

export const category = category => (dispatch) => {
    //console.log('Category hit with: ', category);
    dispatch({
        type: CATEGORY,
        payload: category
    });
};

export const fetchBook = () => async dispatch => {
    const objectFromUrl = await fetch('http://skunkworks.ignitesol.com:8000/books/')
    const data = await objectFromUrl.json()  //parsed using data.json()

    dispatch({
        type: FETCH_BOOK,
        payload: data
    })

};

export const fetchurl = url => async dispatch => {
    const objectFromUrl = await fetch(url)
    const data = await objectFromUrl.json()  //parsed using data.json()

    dispatch({
        type: FETCH_BOOK,
        payload: data
    })

};
