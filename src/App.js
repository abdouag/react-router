import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';

function App() {
  const movies = [
    {
      title: "PEAKY BLINDERS",
      description: "Description du Film 1",
      posterURL: "https://cdn.shopify.com/s/files/1/0969/9128/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_7fef60c1-eddd-41e8-89fd-ac6edeba5038.jpg?v=1619864662",
      rating: 5,
      trailerURL: "https://youtu.be/QlU-5RsnYTk"
    },
    {
      title: "BLACKLIST",
      description: "Description du Film 2",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTU1OTdjYTUtMzA2MS00Njg4LWI1NTctMWUzYzNkNmQ5YWY3XkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_QL75_UX190_CR0,0,190,281_.jpg://pics.filmaffinity.com/The_Blacklist_TV_Series-542009700-large.jpg",
      rating: 4,
      trailerURL: "https://url-vers-le-trailer-du-film-2.com"
    },
  ];
  

    return (
      <Router>
      <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
      </Routes>
  </Router>
);
}

export default App;
