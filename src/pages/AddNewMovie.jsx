import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const AddNewMovie = () => {

  const initialFormData = {
    title: '',
    director: '',
    genre: '',
    release_year: 0,
    abstract: '',
    image: null
  }

  const initialThumb = '/placeholder.png';

  const [formData, setFormData] = useState(initialFormData)

  const [thumb, setThumb] = useState(initialThumb);
  const apiUrl = import.meta.env.VITE_FILM_API_URL;
  const navigate = useNavigate();





  const handlerSetValue = (e) => {
    const { value, name } = e.target;
    if (name === 'image') {
      setThumb(URL.createObjectURL(e.target.files[0]));
      setFormData(prev => ({ ...prev, image: e.target.files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  const handlerSubmitMovies = (e) => {
    e.preventDefault();

    const dataSendForm = new FormData();

    console.log('popolo il FormData');

    for (let key in formData) {
      dataSendForm.append(key, formData[key])
    }

    axios.post(apiUrl, dataSendForm, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(() => navigate('/'))
      .catch(err => {
        console.log(err);
        navigate('/error')
      })
  }

  return (
    <main className="details">
      <div className="container d-flex flex-wrap justify-content-center py-4">
        <div className="card-form d-block my-5 p-4">
          <h1 className="text-center">Add New Movie</h1>
          <div className="card-body">
            <form action="#" onSubmit={handlerSubmitMovies}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control my-3"
                  placeholder="Insert title"
                  value={formData.title}
                  onChange={handlerSetValue} />
              </div>
              <div className="form-group">
                <label>Director</label>
                <input
                  type="text"
                  name="director"
                  className="form-control my-3"
                  placeholder="Insert director"
                  value={formData.director}
                  onChange={handlerSetValue} />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  type="text"
                  name="genre"
                  className="form-control my-3"
                  placeholder="Insert genre"
                  value={formData.genre}
                  onChange={handlerSetValue} />
              </div>
              <div className="form-group">
                <label>Release Year</label>
                <input
                  type="number"
                  name="release_year"
                  className="form-control my-3"
                  placeholder="Insert release year"
                  value={formData.release_year}
                  onChange={handlerSetValue} />
              </div>
              <div className="form-group">
                <label>Abstract</label>
                <textarea
                  type="text"
                  name="abstract"
                  className="form-control my-3"
                  placeholder="Insert abstract"
                  value={formData.abstract}
                  onChange={handlerSetValue} />
              </div>
              <div className="form-group mb-4">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  className="form-control my-3"
                  onChange={handlerSetValue} />
                <p>Anteprima</p>
                <img className="thumb" src={thumb} />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success mt-4 d-grid col-4" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </main>
  )
}

export default AddNewMovie