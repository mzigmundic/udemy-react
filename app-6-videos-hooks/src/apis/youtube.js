import axios from "axios";

const KEY = "AIzaSyBvgOsIQBbTrbW8cfw7--wTcHzkZ5WQHag";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
