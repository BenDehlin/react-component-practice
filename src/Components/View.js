import React, {Component} from 'react'
import Edit from './Edit'
import New from './New'
import Display from './Display'


export default class View extends Component{
  render(){
      let {handleCycle, handleDisplay, handleDelete, handleCancel, handleSave,
          handleChange, display} = this.props
      let {obj} = this.props  
      let buttons = ''
      if(display === 'display'){
        buttons = (
          <div>
            <button onClick={() => handleCycle('previous')}>Previous</button>
            <button onClick={() => handleDisplay('edit')}>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
            <button onClick={() => handleDisplay('new')}>New</button>
            <button onClick={() => handleCycle('next')}>Next</button>
          </div>)
      }else if(display === 'new' || display === 'edit'){
        buttons = (
          <div>
            <button onClick={() => handleCancel()}>Cancel</button>
            <button onClick={() => handleSave(obj)}>Save</button>
          </div>)
      }
      return (
        <div>
          <Display obj={obj} handleChange={handleChange} display={display} />
          {buttons}
        </div>
      )
  }
}