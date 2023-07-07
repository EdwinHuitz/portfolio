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
   removeInput(){

   }
   render(){return(<>
      <div className="todoBody">
         <div className="todoHeader">
            <h5>{weekDay()+" the "+currentDate()} To-Do List</h5>
         </div>
         <div className="todoContent">
            {this.state.list.map((item,i)=>{
               return(
                  <div key={i}>
                     <input type="checkbox"></input><span>{item.value}</span><button></button>
                  </div>
               )
            })}
         </div>
         <div className="todoInput">
            <input className="addInput" placeholder="Add your To-Do items here" value={this.state.input} onChange={(item)=>{this.updateInput(item.target.value)}}></input>
            <button className="addTodo"><span className="plus" onClick={()=>this.addInput()}>+</span></button>
         </div>
      </div>
   </>)}
}export default Todo