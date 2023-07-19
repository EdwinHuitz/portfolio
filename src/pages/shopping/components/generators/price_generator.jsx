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
   splitPrice(price){
      let newPrice=(price+"").split(".")
      return newPrice
   }
   genPrices(){
      
      return(<>{this.props.prices.map((price,i)=>(
      <div key={i} className={"Price"+i} onClick={()=>this.sendPrice(price)}>
         <span className={"largePrice"}>${this.splitPrice(price)[0]}</span><span className={"smallPrice"}>{this.splitPrice(price)[1]}</span>
         </div>))}</>)
   }
   render(){
      return(<>{this.genPrices()}</>)
   }
}export default GeneratePrices