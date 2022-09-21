import React, {useState} from 'react';
import './navbar.scss'
import logo from '../../assets/img/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Links from "./links";
import {Fab} from "@mui/material";
import ModalMobile from "../../pages/modal/modal";

const Navbar = () => {

    const [mod, setMod] = useState(false)

    const openModal = () => {
        setMod(true)
        console.log('open')
    }
    const closeModal =() => {
        setMod(false)

    }

    return (
        <div style={{display:"flex", flexDirection:"column", zIndex:100}}>
            <div className="bar">

                <div className='desktop'>
                    <div className='logo'>
                        <img src={logo} alt='Logo'/>
                    </div>
                    <Links/>
                    <div className='fab'>
                        <Fab variant="extended" size="medium" color='white' >
                            Apply
                        </Fab>
                    </div>
                </div>

                <div className='mobile'>
                    <div className='logo'>
                        <img src={logo} alt='Logo'/>
                    </div>
                    { mod && (
                        <div onClick={ closeModal}>
                            <CloseIcon/>
                        </div>
                    )}
                    { !mod && (
                        <div onClick={openModal}>
                            <MenuIcon/>
                        </div>
                    )}
                </div>

            </div>
            { mod && (
                <ModalMobile/>
            )}
        </div>

    );
};

export default Navbar;
