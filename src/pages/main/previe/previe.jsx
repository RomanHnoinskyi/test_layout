import React from 'react';
import './previe.scss'
import nat from "../../../assets/img/Headline.svg";
import card from "../../../assets/img/Сard.svg";
import berd from "../../../assets/img/Parrot.svg";
import PlaceIcon from '@mui/icons-material/Place';
import {Button} from "@mui/material";

const Previe = () => {
    return (
        <div>
            <div className='cont' style={{background: '#E5E5E5'}}>
                <div className='subscribe'>
                    <div >
                        <img src={nat} alt='nature' className='nat'/>
                    </div>
                    <p className='text'>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </p>
                    <div className='find'>
                        <PlaceIcon/>
                        <p> Find the place to help</p>
                        <Button className='button'>
                            SEARCH
                        </Button>
                    </div>
                </div>
                <div className='card'>
                    <img src={card} alt='card' className='card'/>
                </div>
                <div className='ber'>
                    <img src={berd} alt='berd' className='ber'/>
                </div>
            </div>
        </div>
    );
};

export default Previe;
