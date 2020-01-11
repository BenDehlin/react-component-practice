import React, {Component} from 'react'
import Edit from './Edit'
import New from './New'
import Display from './Display'


export default class View extends Component{
  constructor(props){
    super(props)
    this.state = {
      obj: this.props.obj
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange=({name, value})=>{
    let obj = this.state.obj
    if(name === 'first'){
      obj.name.first = value
    }else if(name === 'last'){
      obj.name.last = value
    }else if(name === 'title'){
      obj.name.title = value
    }else if(name === 'employer'){
      obj.name.employer = value
    }
    this.setState({obj: obj})
    console.log(this.state.obj)
  }

  render(){
      let {handleCycle, handleDisplay, handleDelete, handleCancel, handleSave,
          display} = this.props
      let {obj} = this.state
      let buttons = ''
      let view = ''
      if(display === 'display'){
        view = <Display obj={obj}/>
        buttons = (
          <div>
            <button onClick={() => handleCycle('previous')}>Previous</button>
            <button onClick={() => handleDisplay('edit')}>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
            <button onClick={() => handleDisplay('new')}>New</button>
            <button onClick={() => handleCycle('next')}>Next</button>
          </div>)
      }else if(display === 'new'){
        view = <New />
        buttons = (
          <div>
            <button onClick={() => handleCancel()}>Cancel</button>
            <button onClick={() => handleSave(obj)}>Save</button>
          </div>)
      }else if(display === 'edit'){
        view = (<Edit obj={obj} handleChange={this.handleChange} />)
        buttons = (
          <div>
            <button onClick={() => handleCancel()}>Cancel</button>
            <button onClick={() => handleSave(obj)}>Save</button>
        </div>)
      }
    
      return (
        <div>
          {view}
          {buttons}
        </div>
      )
  }
}