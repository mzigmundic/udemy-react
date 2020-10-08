import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("dogs");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container grey">
            <SearchBar onSearchSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide computer sixteen wide widescreen column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide computer sixteen wide widescreen column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
