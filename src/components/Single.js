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
      <img src={`https://image.tmdb.org/t/p/w500${single.backdrop_path}`} className="w-full h-screen absolute top-0 -z-10" />
      <div  className="w-full h-[80vh] flex justify-center items-center gap-[200px]">
        <img src={`https://image.tmdb.org/t/p/w500${single.poster_path}`} className="w-[350px] h-[500px] border-[30px] border-[rgb(0,0,0,0.7)] rounded-[30px]" />
        <div className="w-[600px] h-[500px] p-[20px] bg-[rgb(0,0,0,0.7)] rounded-[30px] flex flex-col gap-5 ">
          <h1 className="text-3xl">{single.original_title}</h1>
          <h1 className="text-3xl">Date:  {single.release_date}</h1>
          <h3>{single.overview}</h3>
        </div>
      </div>
    </div>
  );
}

export default Single;

