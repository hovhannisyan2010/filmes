import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";

function Single() {
    const id = useParams();
    const [single, setSingle] = useState({});
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?${api_key}`)
        .then((res) => res.json())
        .then((res) => setSingle(res));
    },[]);
    console.log(single);
    
  return (
    <div>
      <div >
        <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}`} />
      </div>
    </div>
  );
}

export default Single;

// `https://api.themoviedb.org/3/vie/${id.id}?${api_key}`
