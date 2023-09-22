import React from "react";
import batman from './batman3Unplash.jpg'

function Home(){
    return ( 

         <div style={{marginTop:"130px"}}>
               
               <div id="home">
                  <div id="carousel_show" class="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel_show" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#carousel_show" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#carousel_show" data-bs-slide-to="2"></button>
                    </div>

                   <div class="carousel-inner">
                      <div class="carousel-item active">
                         <img src={batman} alt="web" class="d-block" style={{width:"100%", height:"500px"}} />
                         <div class="carousel-caption">
                             <h3>Batman Comics</h3>
                             <p>You can Find Information About batman Comics</p>
                          </div>
                       </div>
                       <div class="carousel-item">
                            <img src={batman} alt="Graphic" class="d-block"  style={{width:"100%", height:"500px"}} />
                           <div class="carousel-caption">
                              <h3>Live Action</h3>
                              <p> Info About Batman Live Action Movies</p>
                           </div> 
                        </div>
                        <div class="carousel-item">
                          <img src={batman} alt="marketing" class="d-block"  style={{width:"100%", height:"500px"}} />
                          <div class="carousel-caption">
                              <h3>Cartoon Details</h3>
                               <p>Easily Find out Cartoon Details</p>
                          </div>  
                         </div>
                     </div>


                     <button class="carousel-control-prev" type="button" data-bs-target="#carousel_show" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon"></span>
                     </button>
                     <button class="carousel-control-next" type="button" data-bs-target="#carousel_show" data-bs-slide="next">
                          <span class="carousel-control-next-icon"></span>
                    </button>
            </div> 
         </div>

     </div>

    )
} 



export default Home ;