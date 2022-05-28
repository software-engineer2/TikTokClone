import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mern-backend6.herokuapp.com/",
});

export default instance;