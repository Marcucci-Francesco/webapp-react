import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Card from "../Components/Card";

const HomePage = () => {
  const { moviesList, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className="container my-5">
      <div className="row gap-4">
        {moviesList.map(movie => (
          <Card key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;