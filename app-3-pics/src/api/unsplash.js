import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID yu_WwrCtoziKhQXtp1mARTv8nBcxwUeaYGbJp3Y5dBU",
    },
});
