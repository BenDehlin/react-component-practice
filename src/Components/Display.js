import React from 'react'
import '../App.css'

export default function Display(props){
  let {favoriteMovies, name, title, employer} = props.obj
  let list = favoriteMovies.map((element, index) => {
    return <li key={index}>{element}</li>
  })
  return(
    <div>
      <p>Name: {name.first} {name.last}</p>
      <p>Job Title: {title}</p>
      <p>Employer: {employer}</p>
      <p>Favorite Movies:</p>
      <ol>{list}</ol>
    </div>
  )
}