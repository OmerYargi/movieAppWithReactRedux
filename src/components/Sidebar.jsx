import React from 'react'
import { useDispatch } from 'react-redux'
import { changeActiveFilter } from '../redux/moviesSlice';

const SideBar = () => {

  const dispatch = useDispatch();

  return (
    <div id='sideBar'>
      <button onClick={() => { dispatch(changeActiveFilter("Horror")) }}>Horror</button>
      <button onClick={() => { dispatch(changeActiveFilter("Thriller")) }}>Thriller</button>
      <button onClick={() => { dispatch(changeActiveFilter("Action")) }}>Action</button>
      <button onClick={() => { dispatch(changeActiveFilter("Adventure")) }}>Adventure</button>
      <button onClick={() => { dispatch(changeActiveFilter("Sci-Fi")) }}>Sci-Fi</button>
      <button onClick={() => { dispatch(changeActiveFilter("Drama")) }}>Drama</button>
      <button onClick={() => { dispatch(changeActiveFilter("Mystery")) }}>Mystery</button>
      <button onClick={() => { dispatch(changeActiveFilter("Biography")) }}>Biography</button>
      <button onClick={() => { dispatch(changeActiveFilter("Home")) }}><h2>Home Page</h2></button>
      <button onClick={() => { dispatch(changeActiveFilter("Music")) }}>Music</button>
      <button onClick={() => { dispatch(changeActiveFilter("Crime")) }}>Crime</button>
      <button onClick={() => { dispatch(changeActiveFilter("Comedy")) }}>Comedy</button>
      <button onClick={() => { dispatch(changeActiveFilter("Animation")) }}>Animation</button>
      <button onClick={() => { dispatch(changeActiveFilter("Family")) }}>Family</button>
      <button onClick={() => { dispatch(changeActiveFilter("Fantasy")) }}>Fantasy</button>
      <button onClick={() => { dispatch(changeActiveFilter("War")) }}>War</button>
      <button onClick={() => { dispatch(changeActiveFilter("Romance")) }}>Romance</button>
      <button onClick={() => { dispatch(changeActiveFilter("History")) }}>History</button>

    </div>
  )
}

export default SideBar