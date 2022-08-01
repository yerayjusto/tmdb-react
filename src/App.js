import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getMovies } from './api/index';
import Movies from './components/Movies/Movies';

function App() {
  const [movies, setMovie] = useState([]);

  //Get all movies from api and save into movies
  useEffect(() => {
    getMovies().then((data) => setMovie(data.results));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Movies movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
