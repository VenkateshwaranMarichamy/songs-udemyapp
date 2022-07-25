

const songReducer = () => {

    return [
        { title: 'Pathala Pathala', duration: '3:50'},
        { title: 'Tum Tum', duration: '4:00'},
        { title: 'Adheeraa', duration: '3:45'},
        { title: 'Vinmeen', duration: '4:50'}
    ];

};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};