import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return <h1>Select A Song</h1>;
    }
    return (
        <div>
            <h3>Details</h3>
            <p>
                <strong>Author:</strong> {song.author}
            </p>
            <p>
                <strong>Title:</strong> {song.title}
            </p>
            <p>
                <strong>Genres:</strong>{" "}
                {song.genres.map((genre) => {
                    return <span>{genre} </span>;
                })}
            </p>
            <p>
                <strong>Year:</strong> {song.year}
            </p>
            <p>
                <strong>Duration:</strong> {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
