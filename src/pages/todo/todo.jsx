import { Component } from 'react'
import './todo.css'
import { weekDay,currentDate } from '../../plugins/localTime.js'
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
         }
         const list = [...this.state.list]
         list.push(userInput)
         //reset state for next item
         this.setState({
            list,
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
   showInput(item,key){
      return(<>
         <input className="checkBox" type="checkbox"></input>
         <span className="todoText">{item}</span>
         <button className="todoBtns editBtn" onClick={()=>this.setState({key:key,})}>
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
            <input type="text" className="userInput" defaultValue={item} onChange={(item)=>{this.updateInput(item.target.value,1)}} onSubmit={()=>this.editInput(this.state.edit,key)}></input>
            <button className="hiddenBtn" onClick={()=>this.editInput(this.state.edit,key)}></button>
         </form>
         <button className="todoBtns saveBtn" onClick={()=>this.editInput(this.state.edit,key)}>
            <i className="bx bx-save"></i>
         </button>
         <button className="todoBtns trashBtn" onClick={()=>this.removeInput(key)}>
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
                     {this.state.key!==item.id?this.showInput(item.value,item.id):this.showEditor(item.value,i)}
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