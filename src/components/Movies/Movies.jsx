import { useState } from 'react';
import Movie from './Movie/Movie';

const Movies = ({ movies }) => {
    const [search, setNewSearch] = useState("");
    //Change state search on change
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    //Insert movies if empty or filtered movies when key up detected
    const filteredMovies = !search
        ? movies
        : movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
    return (
        <div className="m-5">
            {/* Search input reactive */}
            <div className="d-flex align-items-center justify-content-center text-center">
                <form className="form-search">
                    <input className="form-control" type="search" placeholder="Search.." value={search} onChange={handleSearchChange} />
                </form>
            </div>

            {/* Show all movies from api */}
            <div className="row">
                {filteredMovies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies