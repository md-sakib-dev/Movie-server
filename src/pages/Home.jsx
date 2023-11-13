import React, { useEffect, useState } from "react";
import "../Components/CSS/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import {Link} from 'react-router-dom'
import MovieList from "../Components/movieList/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6b9b7cfaf1130431b840952918627621&language=en-US&page=1`
      );
      //  console.log(data)
      return setPopularMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getMovie();
  }, []);
   console.log(popularMovies);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            // popularMovies.map(movie => (
            //   <span> {movie.original_title} </span>
            // ))
            popularMovies.map((movie, index) => {
              return (
                <div key={index}>
                <Link  style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  />
                    </div>
                    <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                        <div className="posterImage__runtime">
                            {movie ? movie.release_date: ""}
                        <span className="posterImage__rating">
                            {movie ? movie.vote_average: ""}
                            <i className="fas fa-star"/>{ " "}

                        </span>

                        </div>
                        <div className="posterImage__description">
                            {movie ? movie.overview :""}
                        </div>
                        </div>
                      
                    
                </Link>
                </div>
              )
            })
          }
        </Carousel>
        <MovieList/>
      </div>
    </>
  );
};

export default Home;
