import React, { Component } from "react"
import "./detail_card.css"

class detailCard extends Component{
   constructor(props){
      super(props)
      this.state={
         price:(this.props.price+"").split("."),
      }
      this.closeWindow.bind(this)
      this.splitClothes.bind(this)
      this.splitPrice.bind(this)
      this.addToCart.bind(this)
   }
   closeWindow(){
      this.props.setBool(false)
   }
   addToCart(){
      let price=this.props.price
      let clothes=this.splitClothes()
      const keySet=[...this.props.cart]
      keySet.push({[clothes]:price})
      this.props.setKey(keySet)
      this.closeWindow()
   }
   splitClothes(){
      const clothes=[...this.props.clothes]
      const newClothes=[]
      clothes.map((letter)=>(
         (newClothes.length===0)?newClothes.push(letter.toUpperCase()):
         letter==="-"?newClothes.push(" "):
         newClothes[newClothes.length-1]===" "?newClothes.push(letter.toUpperCase()):
         newClothes.push(letter)
      ))
      return newClothes.toString().replaceAll(",","")
   }
   splitPrice(){
      return (this.props.price+"").split(".")
   }
   render(){
      return(
         <>
         <div className="detailBackground" onClick={()=>this.closeWindow()}></div>
         <div className="detailCard">
            <img className="zoomImage" src={this.props.path} alt={this.props.clothes}></img>
            <h4 className="title">{this.splitClothes()}</h4><h6 className="price">$<span className="largePrice">{this.splitPrice()[0]}</span><span className="smallPrice">{this.splitPrice()[1]}</span><br/><span className="inStock">In Stock</span></h6>
            <button className="button" onClick={()=>this.addToCart()}>Add to Cart</button>
            <h5 className="exit" onClick={()=>this.closeWindow()}>X</h5>
         </div>
      </>)
   }
}
export default detailCard