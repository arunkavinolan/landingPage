import React from "react";
//import ReactDOM from 'react-dom/client';
import batman from './batman3Unplash.jpg'
import './Navbar.css'

function Navbar()  {
    return (
      <div> 
             
            <nav className="navbar navbar-expand-sm bg-light fixed-top" >
               <div className="container-fluid">  
                   <a className="navbar-brand" href="#"> 
                   <img src={batman} style={{height :'100px'}} alt="Logo"  className="rounded-pill" />
                    </a>  
                    <h3>Batman Info</h3>  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                 </button> 
                     
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav "> 
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Info </a>
                </li>
                <li className="nav-item">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myRegister">
                      Register
                </button>
                </li>
                 
                <li className="nav-item ms-1">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                      Login
                </button>
                </li>
            </ul>
           </div>
      </div>  
     </nav>     
          {/* Navbar End  */} 

          {/* login modal  */} 

       
         <div className="modal fade" id="myModal">
          <div class="modal-dialog  modal-dialog-centered ">
            <div class="modal-content">

      
               <div class="modal-header">
                 <h4 class="modal-title text-center">Please Enter Your Login Details</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

      
             <div class="modal-body">
                     
                     <div class="col"> 
                        <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"/>
                           <label for="email">Email</label>
                        </div>
                        <div class="form-floating mt-3 mb-3">
                           <input type="text" class="form-control" id="uname" placeholder="Enter  Username" name="uname"/>
                           <label for="uname">Username</label>
                        </div> 
                        {/* <div class="form-floating mt-3 mb-3"> 
                            <textarea type="text" class="form-control" row="5" col="5" id="idea" placeholder="Tell me your Ideas" name="idea"></textarea>
                            <label for="idea">Tell me about Your Ideas</label>
                        </div> */}
                       <div class="d-grid mb-3">
                            <button type="button" class="btn btn-primary btn-block">Sumbit</button>
                       </div>
                    </div>
            </div>

     
              <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
         </div>
        </div>
                            
                             {/* Registration  modal  */} 

       
         <div className="modal fade" id="myRegister">
          <div class="modal-dialog  modal-dialog-centered ">
            <div class="modal-content">

      
               <div class="modal-header">
                 <h4 class="modal-title text-center">Please Enter Your Register Details</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

      
             <div class="modal-body">
                     
                     <div class="col"> 

                        <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="name" placeholder="Enter Name here" name="name"/>
                           <label for="name">Name</label>
                        </div> 

                        

                        <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="email" placeholder="Enter email" name="email"/>
                           <label for="email">Email</label>
                        </div>
                        <div class="form-floating mt-3 mb-3">
                           <input type="text" class="form-control" id="uname" placeholder="Enter  Username" name="uname"/>
                           <label for="uname">Username</label>
                        </div>  

                        <div class="form-floating mb-3 mt-3">
                           <input type="text" class="form-control" id="pass" placeholder="Enter Password here" name="pass"/>
                           <label for="pass">Password</label>
                        </div>
                        {/* <div class="form-floating mt-3 mb-3"> 
                            <textarea type="text" class="form-control" row="5" col="5" id="idea" placeholder="Tell me your Ideas" name="idea"></textarea>
                            <label for="idea">Tell me about Your Ideas</label>
                        </div> */}
                       <div class="d-grid mb-3">
                            <button type="button" class="btn btn-primary btn-block">Sumbit</button>
                       </div>
                    </div>
            </div>

     
              <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
         </div>
        </div>
           
           
      </div>
 );
}
export default Navbar;
 