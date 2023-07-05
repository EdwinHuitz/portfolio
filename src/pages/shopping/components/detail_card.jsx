import React, { Component } from "react"
import "./detail_card.css"

class detailCard extends Component{
   constructor(props){
      super(props)
      this.state={
         price:(this.props.price+"").split(".")
      }
      this.closeWindow.bind(this)
   }
   closeWindow(){
      this.props.setBool(false)
   }
   render(){
      return(
         <>
         <div className="detailBackground"></div>
         <div className="detailCard">
            <img className="zoomImage" src={this.props.path} alt={this.props.clothes}></img>
            <h4 className="title">{this.props.clothes}</h4><h6 className="price">$<span className="largePrice">{this.state.price[0]}</span><span className="smallPrice">{this.state.price[1]}</span><br/><span className="inStock">In Stock</span></h6>
            <button className="button">Add to Cart</button>
            <h5 className="exit" onClick={()=>this.closeWindow()}>X</h5>
         </div>
      </>)
   }
}
export default detailCard