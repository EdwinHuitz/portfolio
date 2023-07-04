import React, { Component } from 'react'
import './card.css'
import GeneratePics from './pic_generator.jsx'
import DetailCard from './detail_card.jsx'

class Card extends Component{
   constructor(props){
      super(props)
      this.state = {
         preBool:false,
         bool:false,
         prePath:"assets/img/clothes/",
         path:"",
         allClothes:["Hats","Shirts","Pants"],
         clothes:props.clothes,
         hats:["black-fedora","blue-cap","brown-fedora","grey-cap"],
         shirts:["blue-shirt","orange-shirt","salmon-shirt","white-shirt"],
         pants:["brown-pants","folded-pants","jeans","slacks"],
         allPrices:[14.75,12.95,19.49,16.99],
         price:0.0
      }
      this.setPath=this.setPath.bind(this)
      this.setBool=this.setBool.bind(this)
   }
   setPath(n){
      this.setState({path:n,bool:true})
   }
   setBool(){
      this.setState({bool:false})
   }
   render(){
      //on click will pass values to detail card and open it and set details to true
      function generatePrices(){
         return(<>{this.state.allPrices.map((price,i)=>(<h6 key={price+i} className={"Price"+i} >{price}</h6>))}</>)}
         generatePrices.bind(this)
         return(<>
            <div className={this.state.bool===false?"hideDetailCard":"showDetailCard"}>
               <DetailCard bool={this.state.bool} path={this.state.path} clothes={this.state.clothes} price={this.state.price} setBool={this.setBool} />
            </div>
            <div className="Grid Card">
               <h5 className="Title">{"Newest "+this.props.clothes}</h5>
               <GeneratePics clothes={this.state.clothes} hats={this.state.hats} shirts={this.state.shirts} pants={this.state.pants} path={this.state.prePath} setPath={this.setPath} />
            </div>
      </>)
   }
}
export default Card

//TODO: recently viewed, on sale price, random prices