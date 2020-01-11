import React, {Component} from 'react'
import data from './data'
import View from './Components/View'
import './App.css'


export default class App extends Component{
  constructor(){
    super()
    this.state={
      data: data,
      currentValue: 0,
      display: 'display'
    }
    this.handleCycle = this.handleCycle.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleCycle(direction){
    let value = this.state.currentValue
    let lastItem = this.state.data.length-1
    if(direction === 'next'){value === lastItem ? value = 0 : value++}
    else if(direction === 'previous'){value === 0 ? value = lastItem : value--}
    this.setState({currentValue: value})
  }

  handleDelete(){
    let {currentValue, data} = this.state
    data.splice(currentValue, 1)
    this.setState({data: data})
  }

  
  handleDisplay(val){
    this.setState({display: val})
  }

  handleCancel(){
    this.setState({display: 'display'})
  }

  handleSave(data){
    alert("Save coming soon")
    this.setState({display: 'display'})
  }

  render(){
    let {display, data, currentValue} = this.state
    return(
      <div>
        <header></header>
        <div>
          <View    obj={data[currentValue]}
                   handleCycle={this.handleCycle} 
                   handleDelete={this.handleDelete}
                   handleDisplay={this.handleDisplay} 
                   handleSave={this.handleSave}
                   handleCancel={this.handleCancel}
                   display={display} />
        </div>
      </div>
    )
  }
}