import React, { Component } from "react"
import "./detail_card.css"

class detailCard extends Component{
   constructor(props){
      super(props)
      this.closeWindow=this.closeWindow.bind(this)
   }
   closeWindow(){
      this.props.setBool(false)
   }
   render(){
      function filterInfo(word){
         word.replace("-"," ")
         return word
      }

      return(
      <>
         <div className="detailCard">
            <img className="zoomImage" src={this.props.path} alt={this.props.clothes}></img>
            <h4 className="title">{filterInfo(this.props.clothes)}</h4><h6 className="price">{this.props.price}</h6>
            <button className="button">Buy now</button>
            <h5 className="exit" onClick={()=>this.closeWindow()}>X</h5>
         </div>
      </>)
   }
}
export default detailCard