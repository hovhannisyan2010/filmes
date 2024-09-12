import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import HeaderApp from "./components/HeaderApp";
import Layout from "./Layout";
const ganre = [
  { id: 28, name: "action" },
  { id: 12, name: "adventure" },
  { id: 16, name: "animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "history" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "ScienceFiction" },
  { id: 10770, name: "TVMovie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
function App() {
  const [page, setPage] = useState(1)
  const [pageNums, setPageNums] = useState([1, page, 3, "..."])
  const [populary, setPopulary] = useState([]);
  const [ganres, setGanres] = useState([])
  const [ganrenum, setganrenum] = useState([])
  const [inp, setInp] = useState("")


  useEffect(() => {
  if(inp !== ""){   
  fetch(`https://api.themoviedb.org/3/search/movie?${api_key}&query=${inp}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPopulary(res.results)
        if (res.total_pages) {
          let arr = page > 1 ? [page - 1] : []
          for (let i = page; i < res.total_pages; i++) {
            arr.push(i)
            if (i - page === 5) {
              break
            }
          }
          setPageNums(arr)
        }
      }
      );
    setPage(1)
  }else{
    fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (inp === "") {
          setPopulary(res.results)
          if (res.total_pages) {
            let arr = page > 1 ? [page - 1] : []
            for (let i = page; i < res.total_pages; i++) {
              arr.push(i)
              if (i - page === 5) {
                break
              }
            }
            setPageNums(arr)
          }
          setGanres(ganre)
        }
      }
      );
  }
  }, [inp]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (inp === "") {
          setPopulary(res.results)
          if (res.total_pages) {
            let arr = page > 1 ? [page - 1] : []
            for (let i = page; i < res.total_pages; i++) {
              arr.push(i)
              if (i - page === 5) {
                break
              }
            }
            setPageNums(arr)
          }
          setGanres(ganre)
        }
      }
      );
  }, [page]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?${api_key}&with_genres=${ganrenum}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPopulary(res.results)
        if (res.total_pages) {
          let arr = page > 1 ? [page - 1] : []
          for (let i = page; i < res.total_pages; i++) {
            arr.push(i)
            if (i - page === 5) {
              break
            }
          }
          setPageNums(arr)
        }
      })
  }, [ganrenum, page])
  const btn = document.querySelectorAll(".btn")
  return <div>
    <Layout/>
    <HeaderApp/>
    <div className="flex justify-center items-center gap-[30px] flex-wrap">
      <input type="text" className="p-3 text-black w-3/4 text-2xl rounded-3xl m-7" onChange={(e) => setInp(e.target.value)} value={inp} placeholder="search a movie" />
      <div className="w-full md:overflow-x-scroll px-2">
      <div className="flex justify-center items-center gap-[30px] flex-wrap py-5   md:flex-nowrap md:justify-start m-x-4 ">
        {ganres.map((e, i) => {
          return <button key={i} onClick={() => {
            btn[i].classList.toggle("change")
            setPage(1)
            if (btn[i].className !== "btn") {
              setganrenum([...ganrenum, e.id])
            } else {
              setganrenum(ganrenum.filter((elm) => elm !== e.id))
            }
          }} className="btn">{e.name}</button>
        })}
      </div>
        </div>
      <div className="flex justify-center items-center gap-[30px] flex-wrap smol:p-3">
        {
          populary.map((e) => {
            return <Card films={e} key={e.id} />
          })
        }
      </div>

      <div className="w-full justify-center items-center flex gap-3 p-8">
        {pageNums.map((e, i) => {
          if (e >= 1) {
            return <button key={i} onClick={() => setPage(e)} className="w-10 h-10 bg-white text-black">{e}</button>
          }
        })}
      </div>
    </div>
  </div>;
}

export default App;
