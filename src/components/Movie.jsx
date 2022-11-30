import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesAsync, changeDetailsShow } from "../redux/moviesSlice";

function Movie() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  const activeFilter = useSelector((state) => state.movies.activeFilter);
  const goster = useSelector((state) => state.movies.gosterilen);

  const filteredList = (
    <div className="cardwrapper">
      {goster.map((item, index) => (
        <div
          onClick={() => dispatch(changeDetailsShow(item))}
          key={index}
          className="movieCard"
          style={{ backgroundImage: `url(${item.Poster})` }}
        >
          <span className="cardTitle">{item.Title}</span>
        </div>
      ))}
    </div>
  );

  const homePageContent = (
    <div className="cardwrapper">
      {goster.map((item, index) => (
        <div
          onClick={() => dispatch(changeDetailsShow(item))}
          key={index}
          className="movieCard"
          style={{ backgroundImage: `url(${item.Poster})` }}
        >
          <span className="cardTitle">{item.Title}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div id="movie">
      <ul>{activeFilter ? filteredList : homePageContent}</ul>
    </div>
  );
}

export default Movie;
