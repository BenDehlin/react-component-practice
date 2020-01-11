import React from 'react'
import '../App.css'

//Deprecated
export default function Buttons(props){
  let {handleCycle, handleDisplay, handleDelete, handleCancel, handleSave,
      display} = props
  let buttons = ''
  if(display === 'display'){
    buttons = (
      <div>
        <button onClick={() => handleCycle('previous')}>Previous</button>
        <button onClick={() => handleDisplay('edit')}>Edit</button>
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleDisplay('new')}>New</button>
        <button onClick={() => handleCycle('next')}>Next</button>
      </div>
    )
  }else if(display === 'new' || display === 'edit'){
    buttons = (
      <div>
        <button onClick={() => handleCancel()}>Cancel</button>
        <button onClick={() => handleSave()}>Save</button>
      </div>
    )
  }
    return (
      <div>
        {buttons}
      </div>
    )
}