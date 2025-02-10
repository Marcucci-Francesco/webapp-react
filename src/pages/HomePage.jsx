import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Card from "../Components/Card";

const HomePage = () => {
  const { moviesList, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <>
      <main className="home-bg">
        <div className="cover d-flex justify-content-center align-items-center">
          <h1 className="text-white">Discover The Best Films Of All Time</h1>
        </div>
        <div className="container py-5">
          <div className="row gap-5 justify-content-around">
            {moviesList.map(movie => (
              <Card key={movie.id} movies={movie} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;