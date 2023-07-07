import { Component } from 'react'
import './todo.css'
import { weekDay,currentDate } from '../../plugins/localTime.js'
class Todo extends Component{
   constructor(props){
      super(props)
      this.state={
         input:"",
         list:[],
      }
   }
   updateInput(text){
      this.setState({input:text})
   }
   addInput(){
      if (this.state.input!==""){
         const userInput = {
            id:Math.random(),
            value:this.state.input,
         }
         const list = [...this.state.list]
         list.push(userInput)
         console.log(this.state.list)
         //reset state for next item
         this.setState({
            list,
            input:"",
         })
      }
   }
   handleSubmit(e){
      e.preventDefault()
   }
   removeInput(key){
      const list = [...this.state.list]
      const updatedList = list.filter((item)=>item.id!==key)
      this.setState({list:updatedList,})
   }
   render(){return(<>
      <div className="todoBody">
         <div className="todoHeader">
            <h5>{weekDay()+" the "+currentDate()} To-Do List</h5>
         </div>
         <div className="todoContent">
            {this.state.list.map((item,i)=>{
               return(
                  <div className="todoRow" key={i}>
                     <input className="checkBox" type="checkbox"></input>
                     <span className="todoText">{item.value}</span>
                     <button className="trashBtn" onClick={()=>this.removeInput(item.id)}>
                        <i className="bx bx-trash"></i>
                     </button>
                  </div>
               )
            })}
         </div>
         <form className="todoInput" onSubmit={this.handleSubmit}>
            <input className="addInput" placeholder="Add your To-Do items here" value={this.state.input} onChange={(item)=>{this.updateInput(item.target.value)}} onSubmit={()=>this.addInput()}></input>
            <button className="addTodo" onClick={()=>this.addInput()}><span className="plus">+</span></button>
         </form>
      </div>
   </>)}
}export default Todo