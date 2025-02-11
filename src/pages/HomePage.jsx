import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Components/Card";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  const { moviesList, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main className="home-bg">
      <div className="cover d-flex justify-content-center align-items-center">
        <h1 className="text-white">Discover The Best Films Of All Time</h1>
      </div>
      <div className="container swiper-fm">
        <div className="row gap-5 justify-content-around">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {moviesList.map(movie => (
              <SwiperSlide key={movie.id}>
                <Card movies={movie} />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default HomePage;