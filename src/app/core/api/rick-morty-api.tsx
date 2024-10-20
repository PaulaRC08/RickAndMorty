import axios from "axios";

export const RickMortyApi = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});