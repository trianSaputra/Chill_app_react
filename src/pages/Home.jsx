import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import ContinueWatching from "../components/Card/ContinueWatching";
import MovieList from "../components/Card/MovieList";
import Footer from "../components/Footer";

export default function Home({ movies }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel title="Melanjutkan Tonton Film">
        {movies
          .filter((movie) => movie.category === "continue")
          .map((movie) => (
            <ContinueWatching
              key={movie.id}
              image={movie.image}
              title={movie.title}
              rating={movie.rating}
            />
          ))}
      </Carousel>
      <Carousel title="Top Rating Film dan Series Hari Ini">
        {movies
          .filter((movie) => movie.category === "topRating")
          .map((movie) => (
            <MovieList key={movie.id} image={movie.image} title={movie.title} />
          ))}
      </Carousel>
      <Carousel title="Film Trending">
        {movies
          .filter((movie) => movie.category === "trending")
          .map((movie) => (
            <MovieList key={movie.id} image={movie.image} title={movie.title} />
          ))}
      </Carousel>
      <Carousel title="Rilis Baru">
        {movies
          .filter((movie) => movie.category === "newRelease")
          .map((movie) => (
            <MovieList key={movie.id} image={movie.image} title={movie.title} />
          ))}
      </Carousel>
      <Footer />
    </>
  );
}
