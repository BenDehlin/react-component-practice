import React, {Component} from 'react'
import '../App.css'

//Deprecated
export default class New extends Component{
  constructor(props){
    super(props)
    this.state = {
      first: '',
      last: '',
      title: '',
      employer: ''
    }
  }

  handleChange=({name, value}) => {this.setState({[name]: value})}

  render(){
    const {first, last, title, employer} = this.state
    return(
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
}