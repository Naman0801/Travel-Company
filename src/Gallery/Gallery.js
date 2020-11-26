import React from 'react';
import bathroom from '../images/bathroom.webp';
import pool from '../images/pool.webp';
import basin from '../images/basin.webp';
import flowers from '../images/flowers.webp';

function Gallery() {
    return (
      <div className='app__gallery'>
        <h2 id='gallery'>GALLERY</h2>
        <div>
            <img src={basin} alt='basin'/>
            <img src={bathroom} alt='bathroom'/>
            <img src={pool} alt='pool'/>
            {window.innerWidth <= 414 && <img src={flowers} alt='flowers'/>}
        </div>
      </div>
    )
}

export default Gallery
