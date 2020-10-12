import Axios from "axios";

export const config = {
    baseUrl: "https://pokeapi.co/api/v2"
}

Axios.defaults.headers = {
    "cache-control": "private"
}

export default config;
