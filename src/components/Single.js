import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";

function Single() {
  const id = useParams().id;
  const [single, setSingle] = useState({});
  const [credits, setCredits] = useState([]);
  const [video, setVideo] = useState([]);
  const [vid, setVid] = useState("");
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?${api_key}`)
      .then((res) => res.json())
      .then((res) => setSingle(res));
  }, []);
  console.log(video);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?${api_key}`)
      .then((response) => response.json())
      .then((response) => setCredits(response.cast));
  }, []);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?${api_key}`)
      .then((response) => response.json())
      .then((res) => setVideo(res.results));
  }, []);
  return (
    <div className="w-full">
      <img
        src={`https://image.tmdb.org/t/p/w500${single.backdrop_path}`}
        className="w-full h-screen absolute top-0 -z-10"
      />
      <div className="w-full h-[80vh] flex justify-center items-center gap-[100px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
          className="w-[350px] h-[500px] border-[30px] border-[rgba(0,0,0,0.7)] rounded-[30px]"
        />
        <div className="w-[600px] h-[500px] p-[20px] bg-[rgb(0,0,0,0.7)] rounded-[30px] flex flex-col gap-5 ">
          <h1 className="text-3xl">{single.original_title}</h1>
          <h1 className="text-3xl">Date: {single.release_date}</h1>
          <h3>{single.overview}</h3>
        </div>
      </div>
      <div className="bg-black">
        <h1 className="text-3xl">Credits</h1>
        <div className="w-full flex overflow-x-scroll gap-4">
          {credits.map((e, i) => {
            return (
              <div key={i} className="w-full text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                  className="w-[250px] h-[400px]"
                />
                <h1>{e.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[300px] ">
        <h1 className="text-3xl">VIDEOS</h1>
        <div className="flex gap-6 overflow-x-scroll">
          {video.map((e) => {
            return (
              <div
                key={e.key}
                onClick={() => {
                  // <div className="w-full h-screen bg-[rgba(0,0,0,0.76)] absolute top-0"></div>
                }}
              >
               
                <div
                  className="w-[300px] h-[270px]  bg-[rgb(255,83,83)] z-[11111]  cursor-pointer "
                  onClick={() => setVid(e.key)}
                >
                   <iframe
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${e.key}`}
                  className="h-[270px] w-[300px] "
                ></iframe>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      {vid !== "" ?<div className="w-full h-screen fixed z-50 bg-[rgba(0,0,0,0.76)] top-0 flex justify-center items-center cursor-pointer" onClick={()=>setVid("")}>
        <iframe
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${vid}`}
                  className="h-[60%] w-[70%] relative"
                ></iframe>
    </div>:null}
    </div>
  );
}

export default Single;
