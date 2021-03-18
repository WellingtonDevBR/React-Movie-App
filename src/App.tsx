import { useEffect, useState } from 'react';


import { MovieCard } from './components/MovieCard';
import MovieProps from './Contracts/MovieGenreInterface'
import GenreResponseProps from './Contracts/GenreResponseInterface'
import { getGenreTypes } from './services/GenreResponseService';
import { getMoviesByGenre } from './services/MoviesService';
import { getGenre } from './services/GenreService';


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBar } from './components/SideBar';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
    </div>
  )
}