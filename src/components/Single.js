import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Layout from "../Layout";
import Error from "./Error";
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
      <Layout />
      <Header />
      <img
        src={`https://image.tmdb.org/t/p/w500${single.backdrop_path}`}
        className="w-full h-screen absolute top-0 -z-10"
      />
      <div className="w-full h-[80vh] flex justify-center items-center gap-[100px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${single.poster_path}`}
          className="w-[350px] h-[600px] border-[30px] border-[rgba(0,0,0,0.7)] rounded-[30px] md:hidden"
        />
        <div className="w-[600px] h-[600px] p-[20px] bg-[rgba(0,0,0,0.61)] rounded-[30px] flex flex-col gap-5 md:h-[600px]">
          <h1 className="text-3xl">{single.original_title}</h1>
          <h1 className="text-3xl">Date: {single.release_date}</h1>
          <h3>{single.overview}</h3>
        </div>
      </div>
      <div className="bg-black ">
        <h1 className="text-3xl py-6">Credits</h1>
        <div className="w-full flex overflow-x-scroll gap-4">
          {credits.map((e, i) => {
            return (
              <div key={i} className="w-[250px] text-center">
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
      <div className="w-full h-[300px] pt-5">
        <h1 className="text-3xl">VIDEOS</h1>
        <div className="flex gap-6 overflow-x-scroll ">
          {
            video.map((e) => {
              return (
                <div key={e.key}>
                  <div
                    className="relative"
                    onClick={() => setVid(e.key)}>
                    <iframe
                      allowFullScreen
                      src={`https://www.youtube.com/embed/${e.key}`}
                      className="h-[270px] w-[300px]"
                    ></iframe>
                    <div className="w-[300px] h-[270px]  bg-none absolute z-50 top-0 cursor-pointer "></div>
                  </div>

                </div>
              );
            })}
        </div>
      </div>
      {vid !== "" ? <div className="w-full h-screen fixed z-50 bg-[rgba(0,0,0,0.76)] top-0 flex justify-center items-center cursor-pointer p-10" onClick={() => setVid("")}>
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${vid}`}
          className="h-[70%] w-[70%] relative"
        ></iframe>
      </div> : null}
    </div>
  );
}

export default Single;
