import React, { Component } from 'react'

class GeneratePrices extends Component{
   constructor(props){
      super(props)
      this.sendPrice.bind(this)
      this.genPrices.bind(this)
   }
   sendPrice(price){
      this.props.setPrice(price)
   }
   genPrices(){
      
      return(<>{this.props.prices.map((price,i)=>(<h6 key={price+i} className={"Price"+i} onClick={()=>this.sendPrice(price)} >{price}</h6>))}</>)
   }
   render(){
      return(<>{this.genPrices()}</>)
   }
}export default GeneratePrices