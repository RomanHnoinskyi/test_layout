import React from 'react';
import './carousel.scss'
import Card from '../../../components/card/Card'
import water from '../../../assets/img/photo/nature/img-main.svg'
import trees from '../../../assets/img/photo/nature/forest.svg'
import organic from '../../../assets/img/photo/nature/nature.svg'
import plastic from '../../../assets/img/photo/nature/img.svg'
import energy from '../../../assets/img/photo/nature/wind.svg'
import {Pagination} from "@mui/material";

const Carousel = () => {
    return (
        <div>
            <div className='carousel'>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <Card logo={organic} title='Choose organic'/>
                    <Card logo={trees} title='plant trees' />
                    <Card logo={water}
                          alt='water'
                          title='Save watter'
                          text='Taking on the issue of ensuring access to safe water requires worldwide effort.'
                          focus={true}/>
                    <Card logo={plastic} title='avoid plastic'/>
                    <Card logo={energy} title='save energy'/>
                </div>

                <div style={{justifyContent:"center" }}>
                    <Pagination count={5} />
                </div>

            </div>
            <div className='mobileCarousel'>
                <div>
                    <Card logo={water}
                          alt='water'
                          title='Save watter'
                          text='Taking on the issue of ensuring access to safe water requires worldwide effort.'
                          focus={true}/>
                </div>
                <div style={{justifyContent:"center" }}>
                    <Pagination count={5} />
                </div>
            </div>
        </div>

    );
};

export default Carousel;
