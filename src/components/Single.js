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
  }, []);
  console.log(single);

  return (
    <div className="w-full">
      <img src={`https://image.tmdb.org/t/p/w500${single.backdrop_path}`} className="backdrop" />
      <div id="parentSingle" className="lg:flax flax-col">
        <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}`} className="img" />
        <div id="info" className="">
          <h1>{single.original_title}</h1>
          <h1>Date:  {single.release_date}</h1>
          <h3>{single.overview}</h3>
        </div>
      </div>
    </div>
  );
}

export default Single;

