import React, { Component } from 'react'
//will generate pictures and pass them back to card
class GeneratePics extends Component{
   constructor(props){
      super(props)
      this.state = {
         allClothes:["Hats","Scarves","Shirts","Belts","Pants","Shoes"]
      }
      this.setClothesPath.bind(this)
      this.setClothesPath()
      this.sendInfo.bind(this)
      this.genPics.bind(this)
   }
   setClothesPath(){
      let list
      let clothes=this.props.clothes
      let allClothes=this.state.allClothes
      let clothesPath=this.props.clothesPath
      //0=hats
      clothes===allClothes[0]?list=clothesPath[0]:
      //1=scarves
      clothes===allClothes[1]?list=clothesPath[1]:
      //2=shirts
      clothes===allClothes[2]?list=clothesPath[2]:
      //3=belts
      clothes===allClothes[3]?list=clothesPath[3]:
      //4=pants
      clothes===allClothes[4]?list=clothesPath[4]:
      //5=shoes
      list=clothesPath[5]
      return(list)
   }
   sendInfo(data){
      this.props.setPath(data)
   }
   genPics(){
      return(<>
         {this.setClothesPath().map((choice,i)=>(
            <img key={choice+i} className={"cardPic Pic"+i} src={this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png"} onClick={()=>this.sendInfo([this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png",choice,this.props.price[i]])} alt={i}></img>))}
            </>)
   }
   render(){
         return(<>{this.genPics()}</>)
   }
}export default GeneratePics