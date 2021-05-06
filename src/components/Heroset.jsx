import React from 'react';

import img2 from '../image/mu_base_set_dsk_1.jpg';
import robotcomba from '../image/robotcomba.jpg'



export default function Heroset() {
    return (
       
          <div class="container-heroset">
              <div class="heroset--text" >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum eos porro, iste vel, dolorum hic officia veritatis quas repudiandae enim nobis, totam iure in dolores soluta suscipit nisi molestias.
                </p>
                <div >
                <i class="fas fa-play-circle fa-4x"></i>
                </div>
              </div>
              <div className="heroset--image">
                  <img src= {img2} alt="presentation" />
                </div>
          </div>
        
    )
}
