import { Link } from "react-router-dom"

const NotFound = () => {


  return (
    <div className="container bg-danger">
      <h1 className="text-center">ERRORE 404 - PAGINA NON TROVATA</h1>
      <p>La vostra richiesta non può essere soddisfatta in quanto la pagina risulta inesistente!</p>
      <p>Per favore tornare alla Homepage</p>
      <Link className="btn btn-primary" to={'/'}>Torna alla Home</Link>
    </div>
  )
}

export default NotFound