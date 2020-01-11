import React from 'react'
import '../App.css'

export default function Display(props){
  const {handleChange, obj, display} = props
  const {favoriteMovies, name, title, employer} = obj
  const {first, last} = name
  let list = favoriteMovies.map((element, index) => {
    return <li key={index}>{element}</li>
  })
  let view = ''
  if(display === 'display'){
    view = (
      <div>
        <p>Name: {name.first} {name.last}</p>
        <p>Job Title: {title}</p>
        <p>Employer: {employer}</p>
        <p>Favorite Movies:</p>
        <ol>{list}</ol>
      </div>
    )
  }else if(display === 'edit'){
    view = (
      (
        <div>
          <p>Name: <input value={first} name="first"
                   onChange={e => {handleChange(e.target)}}/>
                   <input value={last} name="last"
                   onChange={e => {handleChange(e.target)}}/>
                   </p>
          <p>Job Title: <input value={title} name="title"
                   onChange={e => {handleChange(e.target)}}/></p>
          <p>Employer: <input value={employer} name="employer"
                   onChange={e => {handleChange(e.target)}} /></p>
          <p>Favorite Movies:</p>
        </div>
      )
    )
  }else if(display === 'new'){
    view = (
      <div>
      <p>Name: <input value={first} name="first"
               onChange={e => {this.handleChange(e.target)}} />
               <input value={last} name="last"
               onChange={e => {this.handleChange(e.target)}} />
               <button>Add Name</button></p>
      <p>Job Title: <input value={title} name="title"
               onChange={e => {this.handleChange(e.target)}} />
               <button>Add Title</button></p>
      <p>Employer: <input value={employer} name="employer"
               onChange={e => {this.handleChange(e.target)}} />
               <button>Add Employer</button></p> 
      <p>Favorite Movies:</p>
    </div>
    )
  }
  return(
    <div>{view}</div>
  )
}