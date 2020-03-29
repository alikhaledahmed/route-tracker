import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    try {
        const response = await trackerApi.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (error) {
        console.log(error.name);
    }
};
const createTrack = dispatch => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', { name, locations });
    } catch (error) {
        console.log(error.name);
    }
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);