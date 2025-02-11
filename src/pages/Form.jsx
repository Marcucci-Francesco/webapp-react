import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Form = () => {

  const initialForm = {
    name: '',
    vote: '',
    text: ''
  }
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(useParams());



  const [formData, setFormData] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState('');
  const apiUrl = `${import.meta.env.VITE_FILM_API_URL}/${id}/reviews`

  const validateForm = () => {

    if (!formData.name || !formData.text) return false;
    if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false;

    return true
  }


  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage('Attenzione! Inserire i dati correttamente ed il voto compreso tra 1 e 5!')
      return
    }

    axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res.data);
        setFormData(initialForm);
        setErrorMessage('');
        navigate(-1);
      })
      .catch(err => {
        console.log(err);
      })
  }


  const setValue = (e) => {
    const { value, name } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <main className="details">
      <div className="container d-flex flex-wrap justify-content-center py-4">
        <div className="card-form d-block mt-5 p-4">
          <h1 className="text-center">Add new review</h1>
          <div className="card-body">
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <form action="#" onSubmit={handlerSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control my-3"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={setValue} />
              </div>
              <div className="form-group">
                <label>Text</label>
                <textarea
                  type="text"
                  name="text"
                  className="form-control my-3"
                  placeholder="Insert text"
                  value={formData.text}
                  onChange={setValue} />
              </div>
              <div className="form-group">
                <label>Vote (1-5)</label>
                <input
                  type="number"
                  name="vote"
                  min={1}
                  max={5}
                  className="form-control my-3"
                  placeholder="Insert your vote"
                  value={formData.vote}
                  onChange={setValue} />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success mt-4 d-grid col-4" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-4">
          <button className="btn btn-primary mx-4" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>

    </main>

  )
}

export default Form