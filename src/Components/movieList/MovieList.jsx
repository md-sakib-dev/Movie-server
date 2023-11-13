import React, { useEffect, useState } from 'react'
import "./MovieList.css"
import Card from '../Cards/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card2 from '../Cards/Card2'

const MovieList = () => {
    const[movieList,setMovieList]=useState([])
    const {type}=useParams()
   
    useEffect(()=>{
        getData()

    },[])
    useEffect(()=>{
        getData()
    },[type])
    const getData=async()=>{
        try {
            const { data } = await axios.get(
              `https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=6b9b7cfaf1130431b840952918627621&language=en-US&page=1`
            );
            //  console.log(data)
            return setMovieList(data.results);
          } catch (err) {
            console.log(err);
          }


    }

   
  return (
    
   <>
   <div className="movie_list">
    <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
    <div className="list_card">
        {
            movieList.map((movie,index)=>{
              
                return(
                  // <div key={index}></div>
                  <Card key={index} movie={movie} />
                )
            })

        }  
        

    </div>
   </div>
   </>
  )
}

export default MovieList