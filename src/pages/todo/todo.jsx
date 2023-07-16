import { Component } from 'react'
import './todo.css'
import { today } from '../../plugins/localTime.js'
//TODO:add more features
class Todo extends Component{
   constructor(props){
      super(props)
      this.state={
         input:"",
         list:[],
         edit:"",
         key:0,
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
            check:false,
         }
         const list = [...this.state.list]
         list.push(userInput)
         //reset state for next item
         this.setState({
            list:list,
            input:"",
            edit:"",
            key:0,
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
   checkTask(i){
      const tasks = [...this.state.list]
      const updatedTasks = tasks
      updatedTasks[i]["check"]===false?updatedTasks[i]["check"]=true:updatedTasks[i]["check"]=false
      this.setState({list:updatedTasks,})
   }
   showInput(item,key,i){
      return(<>
         {(this.state.list[i]["check"]===true)?
         <input name="checkBox" defaultValue="" className="checkBox" type="checkbox" checked onChange={()=>this.checkTask(i)}></input>
         :<input name="checkBox" defaultValue="" className="checkBox" type="checkbox" onChange={()=>this.checkTask(i)}></input>}
         <span className={this.state.list[i]["check"]===true?"struck todoText":"todoText"}>{item}</span>
         <button className="todoBtns editBtn" onClick={()=>this.setState({key:key,})}>
            <i className="bx bx-edit"></i>
         </button>
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key)}>
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
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key)}>
            <i className="bx bx-trash"></i>
         </button>
         </>)
   }
   editInput(item,i){
      const list = [...this.state.list]
      
      let newItem=item.trim()
      if(newItem!==""){
         let newList = [...list]
         newList[i].value=newItem
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
            <h5>{today()}<br/> To-Do List</h5>
         </div>
         <div className="todoContent">
            {
               this.state.list.length===0?<div className="todoFiller"><p>Items added to the list will go here</p></div>:
               this.state.list.map((item,i)=>{
                  return(
                     <div className="todoRow" key={i}>
                        {this.state.key!==item.id?this.showInput(item.value,item.id,i):this.showEditor(item.value,item.id,i)}
                     </div>
                  )
            })}
         </div>
         <form className="todoInput" onSubmit={this.handleSubmit}>
            <input type="text" className="addInput" placeholder="Type your To-Do items here" value={this.state.input} onChange={(item)=>{this.updateInput(item.target.value,0)}} onSubmit={()=>this.addInput()}></input>
            <button className="addTodo" onClick={()=>this.addInput()}><span className="plus">+</span></button>
         </form>
      </div>
   </>)}
}export default Todo