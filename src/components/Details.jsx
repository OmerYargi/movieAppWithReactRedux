import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeDetailsShow } from '../redux/moviesSlice';

import { AiOutlineCloseCircle } from "react-icons/ai";

const Details = () => {
  const dispatch = useDispatch();
  const detailsShow = useSelector((state) => state.movies.detailsShow)
  return (
    <div>
      {
        detailsShow && 
        <div id='details'>
          <div className="detailsLeft">
            <div className="detailsPicture" style={{backgroundImage: `url(${detailsShow.Poster})`}}></div>
          </div>
          <div className="detailsContent">
            <h2>{detailsShow.Title}</h2>
            <div className='detailsContentPoint'>
              <p>4,4/5 <br /> Beyazperde</p>
              <p>{detailsShow['IMDb Rating']}/10 <br /> IMDB</p>
              <p>8,5/10 <br /> Sinemalar.com</p>
            </div>
            <p className=''>{detailsShow.Description}</p>
          </div>
          <div className="detailsClose"><AiOutlineCloseCircle onClick={() => dispatch(changeDetailsShow(''))} style={{fontSize: 50, cursor: 'pointer'}}/></div>
        </div>
      }
    </div>
  )
}

export default Details