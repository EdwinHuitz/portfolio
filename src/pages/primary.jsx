import React from 'react'
import Home from './home/home'
import Portfolio from './portfolio/portfolio'
import Weather from './weather/weather'
import Shopping from './shopping/shopping'
import Contact from './contact/contact'
import Footer from '../components/footer'
import Menu from './menu/menu'

export default function Primary(){

   let hash= window.location.hash
   let tags=['#home','#portfolio','#game','#weather','#menu','#shopping','#contact']
   let bgColor="#040b14"
   hash===tags[1]?bgColor="#0F052E":
   hash===tags[4]?bgColor="#e6fbfd":
   hash===tags[5]?bgColor="#0B1828":
   bgColor="#040b14"
   document.body.style.backgroundColor=bgColor
   return(
      <>
         <main id="main">
            {hash===tags[0]?<Home/>:
            hash===tags[1]?<Portfolio/>:
            hash===tags[3]?<Weather/>:
            hash===tags[4]?<Menu/>:
            hash===tags[5]?<Shopping/>:
            hash===tags[6]?<Contact/>:
            <Home/>}
         </main>
         <Footer color={[bgColor,hash===tags[4]?"black":"white"]} />
      </>
   )
}