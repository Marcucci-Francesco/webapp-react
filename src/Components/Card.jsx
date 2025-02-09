import { Link } from "react-router-dom"

const Card = ({ movies }) => {

  return (
    <div className="card col-3">
      <div className="cover">
        <img className="img-fluid card-img-fm mt-2" src={movies.image} alt={movies.title} />
        <div className="card-body">
          <div className="card-title">Title: {movies.title}</div>
          <Link className="btn btn-primary" to={`/dettagli-film/${movies.id}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card