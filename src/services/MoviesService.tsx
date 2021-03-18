import axios from "axios";
import MovieProps from '../Contracts/MovieGenreInterface';


export function getMoviesByGenre(selectedGenreId: number) {
    return axios.get<MovieProps[]>(`http://localhost:3333/movies/?Genre_id=${selectedGenreId}`)
        .then((response) => {
            return response.data;
        });
}