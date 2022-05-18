import axios from "axios";

const KEY = "AIzaSyAz3rYBXm1Ss5PKG8J3rg9YsRS5BdYWfQQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    }
});
