import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import StarRating from "../Components/StarRating";

const FilmDetails = () => {

  const [moviesDetails, setMoviesDetails] = useState(null);
  const apiUrlDetails = import.meta.env.VITE_FILM_API_URL;
  const { id } = useParams();



  const fetchMoviesDetails = () => {
    axios.get(`${apiUrlDetails}/${id}`)
      .then(res => {
        setMoviesDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, [])

  return (
    <main className="details">
      <div className="container py-5">
        <div className=" d-flex">
          <div className="col-4 d-flex justify-content-start my-4">
            <div className="card-fm">
              <img className="img-fluid" src={moviesDetails?.image} alt={moviesDetails?.title} />
            </div>
          </div>
          <div className="col-6 my-4 card-details overflow-auto">
            <div className="card-body mx-4">
              <div className="card-title fs-1">{moviesDetails?.title}</div>
              <div className="mb-2">
                <StarRating vote={moviesDetails?.average_vote || 0} />
              </div>
              <div className="card-text"><strong>Director:</strong> {moviesDetails?.director}</div>
              <div className="card-text"><strong>Genre:</strong> {moviesDetails?.genre}</div>
              <div className="card-text"><strong>Release year:</strong> {moviesDetails?.release_year}</div>
              <div className="card-text"><strong>Abstract:</strong> {moviesDetails?.abstract}</div>
            </div>
            <div className="mx-4 my-4">
              <h4>REVIEWS</h4>
              {moviesDetails?.reviews?.length > 0 ? (moviesDetails?.reviews.map(review => (
                <div key={review.id} className="card-body card-reviews my-4">
                  <div className="card-title mx-2 fw-bolder">{review.name}</div>
                  <div className="mx-2">
                    <StarRating vote={review.vote || 0} />
                  </div>
                  <div className="card-text mx-2">{review.text}</div>
                </div>
              ))) : (
                <p>Nessuna recensione disponibile.</p>
              )}
            </div>
          </div>
        </div>
        <Link className="btn btn-primary" to={'/'}>HomePage</Link>
        <Link className="btn btn-primary mx-4" to={`/dettagli-film/${id}/reviews`}>New Review</Link>
      </div>
    </main>
  )
}

export default FilmDetails