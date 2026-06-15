import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import ContinueWatching from "../components/Card/ContinueWatching";
import DontLookUp from "../assets/continueWatchingImage/DontLookUp.png";
import {
  continueWatchingMovies,
  topRatingMovies,
  trendingMovies,
  newReleaseMovies,
} from "../data/movie";
import MovieList from "../components/Card/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel title="Melanjutkan Tonton Film">
        {continueWatchingMovies.map((movie) => (
          <ContinueWatching
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
      </Carousel>
      <Carousel title="Top Rating Film dan Series Hari Ini">
        {topRatingMovies.map((movie) => (
          <MovieList image={movie.image} title={movie.title} />
        ))}
      </Carousel>
      <Carousel title="Film Trending">
        {trendingMovies.map((movie) => (
          <MovieList image={movie.image} title={movie.title} />
        ))}
      </Carousel>
      <Carousel title="Rilis Baru">
        {newReleaseMovies.map((movie) => (
          <MovieList image={movie.image} title={movie.title} />
        ))}
      </Carousel>
      <Footer />
    </>
  );
}
