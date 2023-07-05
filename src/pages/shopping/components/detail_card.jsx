import React, { Component } from "react"
import "./detail_card.css"
//TODO: fix css for mobile
class detailCard extends Component{
   constructor(props){
      super(props)
      this.closeWindow.bind(this)
   }
   closeWindow(){
      this.props.setBool(false)
   }
   
   render(){
      return(
      <>
         <br/>
         <div className="detailCard">
            <img className="zoomImage" src={this.props.path} alt={this.props.clothes}></img>
            <h4 className="title">{this.props.clothes}</h4><h6 className="price">{this.props.price}</h6>
            <button className="button">Buy now</button>
            <h5 className="exit" onClick={()=>this.closeWindow()}>X</h5>
         </div>
      </>)
   }
}
export default detailCard