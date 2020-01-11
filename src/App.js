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
    this.setState({currentValue: value, data: this.state.data})
    console.log(true, this.state.currentValue, this.state.data[this.state.currentValue])
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

  handleSave(obj){
    let arr = this.state.data
    arr[this.state.currentValue] = obj
    this.setState({data: arr, display: 'display'})
  }

  render(){
    let {display, data, currentValue} = this.state
    return(
      <div>
        <header>{data[currentValue].name.first}</header>
        <div>
          <View    obj={data[currentValue]}
                   handleCycle={this.handleCycle} 
                   handleDelete={this.handleDelete}
                   handleDisplay={this.handleDisplay} 
                   handleSave={this.handleSave}
                   handleCancel={this.handleCancel}
                   display={display}
                   currentValue={currentValue} />
        </div>
      </div>
    )
  }
}