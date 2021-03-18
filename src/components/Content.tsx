import React, { useEffect, useState } from "react";
import GenreResponseProps from "../Contracts/GenreResponseInterface";
import MovieProps from "../Contracts/MovieGenreInterface";
import { getGenreTypes } from "../services/GenreResponseService";
import { getMoviesByGenre } from "../services/MoviesService";
import { MovieCard } from './MovieCard';


interface GenreMovieById {
  onGetNewGenreId: number;
}

export function Content({ onGetNewGenreId = 1}: GenreMovieById) {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

useEffect(() => {

  setSelectedGenreId(onGetNewGenreId);

  let genresType = getGenreTypes(selectedGenreId);

  genresType.then((data) =>
    setSelectedGenre(data)
  )

  let moviesByGenre = getMoviesByGenre(selectedGenreId);

  moviesByGenre.then((data) =>
    setMovies(data)
  )

}, [selectedGenreId, onGetNewGenreId]);

return (
  <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
)
}