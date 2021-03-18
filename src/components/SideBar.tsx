import React, { useEffect, useState } from "react";
import GenreResponseProps from "../Contracts/GenreResponseInterface";
import { Button } from './Button';
import { getGenreTypes } from "../services/GenreResponseService";
import { getGenre } from "../services/GenreService";
import { render } from "react-dom";
import { Content } from "./Content";



export function SideBar() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    let genresType = getGenre();

    genresType.then(data =>
      setGenres(data)
    )
  }, []);


  return (
    <>
    
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
      <Content onGetNewGenreId={selectedGenreId}/>
    </>
  )
}

