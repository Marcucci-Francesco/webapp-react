import { Link } from "react-router-dom"

const NotFound = () => {


  return (
    <div className="container bg-danger">
      <h1 className="text-center">ERRORE 404 - PAGE NOT FOUND</h1>
      <p>Your request cannot be fulfilled as the page does not exist!</p>
      <p>Please return to the Homepage.</p>
      <Link className="btn btn-primary" to={'/'}>Return to Home</Link>
    </div>
  )
}

export default NotFound