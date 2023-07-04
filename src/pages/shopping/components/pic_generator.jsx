import React, { Component } from 'react'
//will generate pictures and pass them back to card
class GeneratePics extends Component{
   constructor(props){
      super(props)
      this.state = {
         allClothes:["Hats","Shirts","Pants"]
      }
      this.setClothes = this.setClothes.bind(this)
      this.setClothes()
      this.sendInfo = this.sendInfo.bind(this)
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
   render(){
         return(<>
         {this.setClothes().map((choice,i)=>(
            <img key={choice+i} className={"cardPic Pic"+i} src={this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png"} onClick={()=>this.sendInfo(this.props.path+this.props.clothes.toLowerCase()+"/"+choice+".png")} alt={i}></img>))}
            </>)
   }
}export default GeneratePics