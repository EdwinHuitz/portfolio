import Home from './home/home'
import Portfolio from './portfolio/portfolio'
import Weather from './weather/weather'
import Todo from './todo/todo'
import Menu from './menu/menu'
import Shopping from './shopping/shopping'
import Contact from './contact/contact'
import Nav from '../components/navbar'
import Footer from '../components/footer'

export default function Primary(){

   let hash= window.location.hash
   let tags=['#home','#portfolio','#game','#weather','#todo','#menu','#shopping','#contact']
   let bgColor="#040b14"
   hash===tags[0]?bgColor="#000000":
   hash===tags[1]?bgColor="#0F052E":
   hash===tags[4]?bgColor="#e9e9e9":
   hash===tags[5]?bgColor="#e6fbfd":
   hash===tags[6]?bgColor="#232323":
   bgColor="#040b14"
   document.body.style.backgroundColor=bgColor
   return(
      <>
         <main id="main">
            {hash===tags[0]?<Home/>:
            hash===tags[1]?<Portfolio/>:
            hash===tags[3]?<Weather/>:
            hash===tags[4]?<Todo/>:
            hash===tags[5]?<Menu/>:
            hash===tags[6]?<Shopping/>:
            hash===tags[7]?<Contact/>:
            <Home/>}
         </main>
         <Footer color={[bgColor,hash===tags[4]?"black":hash===tags[5]?"#149ddd":"white"]} />
         <Nav/>
      </>
   )
}