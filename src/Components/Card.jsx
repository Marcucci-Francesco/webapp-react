import { Link } from "react-router-dom"
import StarRating from "./StarRating"

const Card = ({ movies }) => {

  return (
    <div className="card col-3">
      <div className="cover-card">
        <img className="img-fluid card-img-fm mt-2" src={movies.image} alt={movies.title} />
        <div className="card-body px-0">
          <div className="card-title mx-2 fs-5 fw-bold text-center">{movies.title}</div>
          <Link className="btn btn-primary mt-2 mx-2 d-grid" to={`/dettagli-film/${movies.id}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card