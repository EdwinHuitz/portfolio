import { Component } from 'react'
import './todo.css'
import { weekDay,currentDate } from '../../plugins/localTime.js'
class Todo extends Component{
   constructor(props){
      super(props)
      this.state={
         input:"",
         list:[],
         edit:0,
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
         //reset state for next item
         this.setState({
            list,
            input:"",
            edit:0,
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
   showInput(item,key){
      return(<>
         <input className="checkBox" type="checkbox"></input>
         <span className="todoText">{item}</span>
         <button className="todoBtns editBtn" onClick={()=>this.setState({edit:1,})}>
            <i className="bx bx-edit"></i>
         </button>
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key)}>
            <i className="bx bx-trash"></i>
         </button>
         </>)
   }
   showEditor(item,key){
      return(<>
         <form onSubmit={this.handleSubmit}>
            <input type="text" defaultValue={item} onSubmit={()=>this.editInput(item,key)}></input>
         </form>
         <button className="todoBtns saveBtn" onClick={()=>this.editInput(item,key)}>
            <i className="bx bx-save"></i>
         </button>
         </>)
   }
   editInput(item,key){
      //const list = [...this.state.list]
      // return(
         
      //    )
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
                     {this.state.edit===0?this.showInput(item.value,item.id):this.showEditor(item.value,item.key)}
                  </div>
               )
            })}
         </div>
         <form className="todoInput" onSubmit={this.handleSubmit}>
            <input type="text" className="addInput" placeholder="Add your To-Do items here" value={this.state.input} onChange={(item)=>{this.updateInput(item.target.value)}} onSubmit={()=>this.addInput()}></input>
            <button className="addTodo" onClick={()=>this.addInput()}><span className="plus">+</span></button>
         </form>
      </div>
   </>)}
}export default Todo