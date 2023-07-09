import { Component } from 'react'
import './todo.css'
import { weekDay,currentDate } from '../../plugins/localTime.js'
//TODO:add styling and fix checkbox not sticking to correct item when deletions happen. Also add more features
class Todo extends Component{
   constructor(props){
      super(props)
      this.state={
         input:"",
         list:[],
         edit:"",
         key:0,
         tasks:[],
      }
   }
   updateInput(text,int){
      int===0?this.setState({input:text}):
      this.setState({edit:text})
   }
   addInput(){
      if (this.state.input!==""){
         const userInput = {
            id:Math.random(),
            value:this.state.input,
         }
         const list = [...this.state.list]
         const tasks = [...this.state.tasks]
         list.push(userInput)
         tasks.push(0)
         //reset state for next item
         this.setState({
            list:list,
            tasks:tasks,
            input:"",
            edit:"",
            key:0,
         })
      }
   }
   handleSubmit(e){
      e.preventDefault()
   }
   removeInput(key,i){
      const list = [...this.state.list]
      const tasks = [...this.state.tasks]
      const updatedList = list.filter((item)=>item.id!==key)
      const updatedTasks=tasks.slice(0,-1)
      console.log(i)
      console.log(tasks)
      console.log(updatedTasks)
      this.setState({list:updatedList,tasks:updatedTasks,})
   }
   checkTask(i){
      const tasks = [...this.state.tasks]
      let updatedTasks = tasks
      updatedTasks[i]===0?updatedTasks[i]=1:updatedTasks[i]=0
      this.setState({tasks:updatedTasks,})
   }
   showInput(item,key,i){
      return(<>
         <input className="checkBox" type="checkbox" onClick={()=>this.checkTask(i)}></input>
         <span className={this.state.tasks[i]===1?"struck todoText":"todoText"}>{item}</span>
         <button className="todoBtns editBtn" onClick={()=>this.setState({key:key,})}>
            <i className="bx bx-edit"></i>
         </button>
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key,i)}>
            <i className="bx bx-trash"></i>
         </button>
         </>)
   }
   showEditor(item,key,i){
      return(<>
         <form onSubmit={this.handleSubmit}>
            <input type="text" className="userInput" defaultValue={item} onChange={(item)=>{this.updateInput(item.target.value,1)}} onSubmit={()=>this.editInput(this.state.edit,i)}></input>
            <button className="hiddenBtn" onClick={()=>this.editInput(this.state.edit,i)}></button>
         </form>
         <button className="todoBtns saveBtn" onClick={()=>this.editInput(this.state.edit,i)}>
            <i className="bx bx-save"></i>
         </button>
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key,i)}>
            <i className="bx bx-trash"></i>
         </button>
         </>)
   }
   editInput(item,key){
      const list = [...this.state.list]
      
      let newItem=item.trim()
      if(newItem!==""){
         let newList = [...list]
         newList[key].value=newItem
         this.setState({
            list:newList,
            input:"",
            edit:"",
            key:0,
         })
      }
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
                     {this.state.key!==item.id?this.showInput(item.value,item.id,i):this.showEditor(item.value,item.id,i)}
                  </div>
               )
            })}
         </div>
         <form className="todoInput" onSubmit={this.handleSubmit}>
            <input type="text" className="addInput" placeholder="Add your To-Do items here" value={this.state.input} onChange={(item)=>{this.updateInput(item.target.value,0)}} onSubmit={()=>this.addInput()}></input>
            <button className="addTodo" onClick={()=>this.addInput()}><span className="plus">+</span></button>
         </form>
      </div>
   </>)}
}export default Todo