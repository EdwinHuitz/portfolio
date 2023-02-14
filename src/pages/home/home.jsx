import React, {useState,useEffect} from "react"
import './home.css'
//!Add stars to background
export default function Home(){
   useEffect(() => {
      let i=0
      let erase=false
      let letters = ''
      let pause,loop
      const langs=["HTML5", "Python", "React", "CSS3", "Full-Stack", "Django", "JavaScript", "Node.js"]
      loop = setInterval(async() => {
         if(erase===false){
            if(letters.length!==langs[i].length){
               letters+=langs[i][letters.length]
               setSkill(letters)
            }else{
               pause=true
               erase=true
            }
         }else if(erase===true){
            if(pause===true){setTimeout(()=>{pause=false},440)}
            else{
               if(letters.length>0){
                  letters=letters.slice(0,letters.length-1)
                  setSkill(letters)
               }
               else{
                  erase='done'
               }
            }
         }
         else{
            (i<langs.length-1)?i++:i=0
            setTimeout(()=>{letters='';erase=false},440)
         }
      }, 150)
      return () => {
         clearInterval(loop)
      }
   }, [])
   const [skill,setSkill]=useState('')
   return(
   <div id="home" className="d-flex flex-column justify-content-center align-items-center">
         <h1 className="name" title="Edwin Huitz: Full-Stack Web Developer">Edwin Huitz</h1>
         <p>{skill}<span className="cursor">|</span> Developer.</p>
         <div className="links">
            <a href="mailto:edwinhuitz@gmail.com" title="My E-Mail"><i className="bx bx-envelope"></i></a>
            <a href="https://www.linkedin.com/in/edwin-huitz/" target="_blank" rel="noreferrer" title="My LinkedIn"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/EdwinHuitz" target="_blank" rel="noreferrer" title="My GitHub"><i className="bx bxl-github"></i></a>
         </div>
      </div>
   )
}