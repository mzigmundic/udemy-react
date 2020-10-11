import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: "Smells like teen spirit",
            author: "Nirvana",
            year: 1991,
            genres: ["grunge", "rock"],
            duration: "4:10",
        },
        {
            title: "Lake of Fire",
            author: "Nirvana",
            year: 1993,
            genres: ["rock"],
            duration: "3:20",
        },
        {
            title: "Lithium",
            author: "Nirvana",
            year: 1989,
            genres: ["grunge", "rock"],
            duration: "4:40",
        },
        {
            title: "Where did you sleep last night",
            author: "Nirvana",
            year: 1993,
            genres: ["grunge", "rock", "blues"],
            duration: "5:20",
        },
        {
            title: "Surfing with the Alien",
            author: "Satch",
            year: 1985,
            genres: ["instrumental", "rock"],
            duration: "5:40",
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
