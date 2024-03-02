import { Link } from "react-router-dom";
import "../source/style.css";
const Title=()=>{
    return (
      <a href="/"><img src="data:image/png;base64,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" alt="image logo" className="logoimage"/></a>
      
    )
  }
const HeaderComponet=()=>{
    return (
       <div className="header">
         <Title/>
         <div className="nav-items">
           <ul>
             <Link className="LinkedPath" to="/"><li> Home </li></Link>
             <Link className="LinkedPath" to="/about"><li> About </li></Link>
             <Link className="LinkedPath" to="/contact"><li> Contact </li> </Link>
             <li> Cart </li>
           </ul>
         </div>
       </div>
   
     )
   };
export default HeaderComponet;   