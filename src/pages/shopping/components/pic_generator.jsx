import React, { Component } from 'react'
//will generate pictures and pass them back to card
class GeneratePics extends Component{
   constructor(props){
      super(props)
      this.state = {
         allClothes:["Hats","Shirts","Pants"]
      }
      this.setClothesPath.bind(this)
      this.setClothesPath()
      this.setClothes.bind(this)
      this.setClothes()
      this.sendInfo.bind(this)
      this.genPics.bind(this)
   }
   setClothesPath(){
      let list
      this.props.clothes===this.state.allClothes[0]?list=this.props.clothesPath[0]:
      this.props.clothes===this.state.allClothes[1]?list=this.props.clothesPath[1]:
      list=this.props.clothesPath[2]
      return(list)
   }
   setClothes(){
      let list
      this.props.clothes===this.state.allClothes[0]?list=this.props.hats:
      this.props.clothes===this.state.allClothes[1]?list=this.props.shirts:
      list=this.props.pants
      return(list)
   }
   sendInfo(data){
      this.props.setPath(data)
   }
   genPics(){
      return(<>
         {this.setClothesPath().map((choice,i)=>(
            <img key={choice+i} className={"cardPic Pic"+i} src={this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png"} onClick={()=>this.sendInfo([this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png",this.setClothes()[i],this.props.price[i]])} alt={i}></img>))}
            </>)
   }
   render(){
         return(<>{this.genPics()}</>)
   }
}export default GeneratePics