import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";

const FilmDetails = () => {

  const [moviesDetails, setMoviesDetails] = useState(null);
  const apiUrlDetails = import.meta.env.VITE_FILM_API_URL;
  const { id } = useParams();


  const fetchMoviesDetails = () => {
    axios.get(`${apiUrlDetails}/${id}`)
      .then(res => {
        console.log(res.data);

        setMoviesDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, [id])

  return (
    <div className="container my-5">
      <div className=" d-flex">
        <div className="col-4 d-flex justify-content-start my-4">
          <div className="card-fm">
            <img className="img-fluid" src={moviesDetails?.image} alt={moviesDetails?.title} />
          </div>
        </div>
        <div className="col-6 my-4 card-details overflow-auto">
          <div className="card-body mx-4">
            <div className="card-title">Title: {moviesDetails?.title}</div>
            <div className="card-text">Director: {moviesDetails?.director}</div>
            <div className="card-text">Genre: {moviesDetails?.genre}</div>
            <div className="card-text">Relais Year: {moviesDetails?.release_year}</div>
            <div className="card-text">Abstract: {moviesDetails?.abstract}</div>
          </div>
          <div className="mx-4 my-4">
            <h4>RECENSIONI</h4>
            {/* {moviesDetails.reviews.map(review => (
              <div key={review.id} className="card-body card-reviews my-4">
                <div className="card-title mx-2 fw-bolder">{review.name}</div>
                <div className="card-text mx-2">{review.text}</div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Link className="btn btn-primary" to={'/'}>HomePage</Link>
    </div>
  )
}

export default FilmDetails