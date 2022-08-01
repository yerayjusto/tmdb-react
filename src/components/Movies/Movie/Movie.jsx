const Movie = ({ movie }) => {
    const imagePath = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className="col-lg-3 col-sm-6 mb-5" >
            <div className="p-0 card card-home card-body">
                <img alt="" src={`${imagePath}${movie.poster_path}`}></img>
                <div style={{ height: '140px' }}>
                    <h3 className="card-title text-center mt-3">
                        {movie.title}
                    </h3>
                    <h3 className="releaseDate"><span className="badge badge-secondary mx-2">{movie.release_date.substring(0, 4)}</span></h3>
                    <span className="m-2 rate card-text"><strong>{movie.vote_average}</strong></span>
                </div>
            </div>
        </div>
    );
}
export default Movie;