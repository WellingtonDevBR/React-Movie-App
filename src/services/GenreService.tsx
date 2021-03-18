import axios from "axios";
import GenreResponseProps from '../Contracts/GenreResponseInterface';


export function getGenre() {
    return axios.get<GenreResponseProps>(`http://localhost:3333/genres`)
        .then((response) => {
            return response.data;
        });
}