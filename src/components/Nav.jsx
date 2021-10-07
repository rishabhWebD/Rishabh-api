import React from 'react';
import { NavLink } from 'react-router-dom';
import dg from './dg.jpg';

const Nav = ()=>{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <img src={dg} height="40px" width="40px" className="img"/>
                  <NavLink class="navbar-brand" to="/">D0G_LOVERS</NavLink>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav mr mb-2  mb-lg-0">
                              <li class="nav-item">
                    <NavLink activeClassName="menu_active" className="nav-link active acv" aria-current="page" to="/">Home</NavLink>
                           </li>
        <li class="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active acv" aria-current="page" to="/breed">Random</NavLink>
        </li>
        </ul>
         
      
    </div>
  </div>
</nav></>
    )
}
export default Nav;