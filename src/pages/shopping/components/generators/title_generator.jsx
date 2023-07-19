function generateTitles(props){
   const clothes=props.clothes
   let clothesPath=props.clothesPath
   function findClothes(c){
      switch(c){
         case "Hats":clothesPath=clothesPath[0];break;
         case "Scarves":clothesPath=clothesPath[1];break;
         case "Shirts":clothesPath=clothesPath[2];break;
         case "Belts":clothesPath=clothesPath[3];break;
         case "Pants":clothesPath=clothesPath[4];break;
         case "Shoes":clothesPath=clothesPath[5];break;
         default:console.log("Error: 404 Clothes not found")
      }
   }
   findClothes(clothes)
   function splitClothes(n){
      const clothes=n.split("")
      const newClothes=[]
      clothes.map((letter)=>(
         (newClothes.length===0)?newClothes.push(letter.toUpperCase()):
         letter==="-"?newClothes.push(" "):
         newClothes[newClothes.length-1]===" "?newClothes.push(letter.toUpperCase()):
         newClothes.push(letter)
      ))
      return newClothes.toString().replaceAll(",","")
   }
   return(<>{
      clothesPath.map((clothing,i)=>(
         <h5 className={"t"+i} key={i}>{splitClothes(clothing)}</h5>
      ))
   }
   </>)
}
export default generateTitles