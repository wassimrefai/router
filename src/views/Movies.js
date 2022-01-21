import React from "react";
import Card from "../component/Moviescard";
import Trailer from "./Trailer";
import { useEffect } from "react";
import { Route,useHistory } from "react-router-dom";
export default function Movies() {
  const history = useHistory();
  const ChangeUrl = () =>{
    history.push("/trailer");
  }
  const categorieList = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title: "Godzilla",
      description: "desc.......",
      trailer:"https://www.youtube.com/watch?v=vIu85WQTPRc"
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg",
      title: "FURY",
      description: "desc.......",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      title: "Dump and Dumper",
      description: "desc.......",
    },
    {
      img: "https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg",
      title: "title1",
      description: "desc.......",
    },
    {
      img: "https://www.cieau.com/wp-content/uploads/2019/11/eau_nature-525x350.jpg",
      title: "title2",
      description: "desc.......",
    },
    {
      img: "https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg",
      title: "title3",
      description: "desc.......",
    },
  ];
  return (
    <div>
      this is Movies page
      {categorieList.map((item, index) => {
        return (
            <div className="container">
            <div className="card-deck">
              <div className="Cards" key={index}>
                {" "}
                <Card item={item} />{" "}

                <Route  exact path="/trailer" component={Trailer} />
            <button onClick={ChangeUrl}>trailer</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
