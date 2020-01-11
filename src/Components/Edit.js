import React, {Component} from 'react'
import '../App.css'

//Deprecated
export default class Edit extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    const {handleChange, obj} = this.props
    const {name, title, employer} = obj
    const {first, last} = name
    return(
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
  }
}