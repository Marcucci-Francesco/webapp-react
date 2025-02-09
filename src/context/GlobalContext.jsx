import { useContext, useState, createContext, useEffect } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [moviesList, setMoviesList] = useState([]);

  const apiUrl = import.meta.env.VITE_FILM_API_URL;

  const fetchMovies = () => {
    axios.get(apiUrl)
      .then(res => {
        setMoviesList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }



  const value = {
    fetchMovies,
    moviesList,
  }


  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext }