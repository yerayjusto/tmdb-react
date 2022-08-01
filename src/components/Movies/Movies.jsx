import Movie from './Movie/Movie';

const Movies = ({ movies }) => {

    return (
        // Show all movies from api
        <div className="row">
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movies