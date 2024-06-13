import axios from "axios"

export default axios.create({
    baseURL: "https://localhost:7207",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}"
    }
});