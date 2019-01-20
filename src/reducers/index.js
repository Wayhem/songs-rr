import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All star', duration: '3:14' },
        { title: 'Smells like teen spirit', duration: '3:54' }
    ];
}

const songSelectorReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selector: songSelectorReducer
})