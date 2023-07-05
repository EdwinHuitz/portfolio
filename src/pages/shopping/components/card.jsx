import React, { Component } from 'react'
import './card.css'
import GeneratePics from './pic_generator.jsx'
import GeneratePrices from './price_generator.jsx'
import DetailCard from './detail_card.jsx'

class Card extends Component{
   constructor(props){
      super(props)
      this.state = {
         bool:false,
         prePath:"assets/img/clothes/",
         path:"",
         allClothes:["Hats","Shirts","Pants"],
         clothesPath:[["black-fedora","blue-cap","brown-fedora","grey-cap"],["blue-shirt","orange-shirt","salmon-shirt","white-shirt"],["tan-pants","folded-pants","blue-jeans","brown-slacks"]],
         clothes:props.clothes,
         currentClothes:"",
         hats:["Black Fedora","Blue Cap","Brown Fedora","Grey Cap"],
         shirts:["Blue Shirt","Orange Shirt","Salmon Shirt","White Shirt"],
         pants:["Tan Pants","Folded Pants","Blue Jeans","Brown Slacks"],
         allPrices:[14.75,12.95,19.49,16.99],
         price:14.75
      }
      //binding functions to this
      this.setPath=this.setPath.bind(this)
      this.setBool=this.setBool.bind(this)
      this.setPrice=this.setPrice.bind(this)
   }
   //passing values from child to current state
   setPath(n){
      this.setState({path:n[0],currentClothes:n[1],price:n[2],bool:true})
   }
   setBool(){
      this.setState({bool:false})
   }
   setPrice(n){
      this.setState({price:n})
   }
   //render page
   render(){
      return(<>
         <div className={this.state.bool===false?"hideDetailCard":"showDetailCard"}>
            <DetailCard bool={this.state.bool} path={this.state.path} clothes={this.state.currentClothes} price={this.state.price} setBool={this.setBool} />
         </div>
         <div className="Grid Card">
            <h5 className="Title">{"Newest "+this.props.clothes}</h5>
            <GeneratePics clothes={this.state.clothes} clothesPath={this.state.clothesPath} hats={this.state.hats} shirts={this.state.shirts} pants={this.state.pants} path={this.state.prePath} setPath={this.setPath} price={this.state.allPrices} />
            <GeneratePrices prices={this.state.allPrices} setPrice={this.setPrice} />
         </div>
      </>)
   }
}
export default Card

//TODO: recently viewed, on sale price, random prices