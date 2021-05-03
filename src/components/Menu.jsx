import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,NavLink} from 'react-router-dom';
import './components.css';

export default function Menu() {
     return (
         <div>
<nav className="navbar navbar-expand-sm fixed navbar-dark bg-dark">
    <div className="container-fluid">       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <NavLink className="navbar-brand" to="/">News</NavLink>
                </li>
                <li class="nav-item ">
                <NavLink className="navbar-brand" to="/Collection">Collection</NavLink>
                </li>
            </ul>            
        </div> 
        
    </div> 
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <input type="button" value="Search" className= "btn btn-outline-success"/>
    </form>  
</nav>
</div>
)
 }
 