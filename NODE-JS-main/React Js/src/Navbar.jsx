import { Link } from "react-router-dom";

function Navbar(){
  return <div className="nav-container">
         <div className="nav-items">
           <Link to="/">Home</Link> 
         </div>
         <div className="nav-items">
            <Link to="/favourites">Favourites</Link> 
         </div>
         <div className="nav-items">
          <Link to="/blogs">Blogs</Link> 
         </div>
       </div>
}

export default Navbar;