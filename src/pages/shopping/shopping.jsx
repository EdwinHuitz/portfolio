import './shopping.css'
import Card from './components/card.jsx'
//TODO: animate the shopping cart and add a number to it whenever the user clicks the buy button 
export default function Shopping(){
   return(
   <>
      <div className="sApp">
         <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#131921",color:"silver"}}>
            <div className="container-fluid">
               <div className="collapse navbar-collapse">
                  <a className="navbar-brand brand" href="/#shopping">Fashion Front</a>
                  <ul className="d-flex justify-content-evenly align-content-center navbar-nav w-100 p-3">
                     <li className="nav-item"><button className="navLinkBtn">Hats</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Scarves</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Shirts</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Belts</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Pants</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Shoes</button></li>
                     <li className="nav-item"><button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}></button></li>
                  </ul>
               </div>
               <div className="smaller w-100 p-3">
                  <ul className="d-flex justify-content-evenly">
                     <li className="nav-item"><button className="navLinkBtn">Clothes</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Accessories</button></li>
                     <li className="nav-item"><button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}></button></li>
                  </ul>
               </div>
            </div>
         </nav>
         <div className="mainDisplay">
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Hats"/>
            <Card clothes="Scarves"/>
            </div>
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Shirts"/>
            <Card clothes="Belts"/>
            </div>
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Pants"/>
            <Card clothes="Shoes"/>
            </div>
         </div>
      </div>
   </>)
}