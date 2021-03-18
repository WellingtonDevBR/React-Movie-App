import axios from "axios";
import GenreResponseProps from '../Contracts/GenreResponseInterface';


export function getGenreTypes(selectedGenreId: number) {
    return axios.get<GenreResponseProps>(`http://localhost:3333/genres/${selectedGenreId}`)
        .then((response) => {
            return response.data;
        });
}