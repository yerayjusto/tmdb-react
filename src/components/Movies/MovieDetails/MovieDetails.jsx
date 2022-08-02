import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../api/index';
import { useNavigate } from 'react-router-dom';

function MovieDetails() {
    const navigateHome = useNavigate();
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const params = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        getMovieDetails(params.id)
            .then((data) => setMovie(data))
    }, [params.id]);

    useEffect(() => {
        getMovieDetails(params.id)
            .then((data) => setGenres(data.genres))
    }, [params.id]);

    return (
        <div className="details-container row m-5 d-flex border rounded">
            <div className="col-12 d-flex justify-content-end p-0">
                <button onClick={() => navigateHome("/")} className="btn-secondary btn-lg">Close</button>
            </div>
            <div className="img-div p-4 m-4 col-4 d-flex">
                <img className="img-details" variant="top" src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="content-div p-4 col-6">
                <h1 className="text-center"><strong>{movie.title}</strong></h1>
                <h2 className="mt-5">{movie.overview}</h2>
                <div className="mt-5 row justify-content-center">
                    {genres.map(genre =>
                        <h3 key={genre.id} className="mx-2"><span className="badge badge-secondary">{genre.name}</span></h3>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
