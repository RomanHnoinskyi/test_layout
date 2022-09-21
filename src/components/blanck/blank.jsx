import React from 'react';
import {Button, TextField} from "@mui/material";
import './blank.scss'


const Blank = () => {
    return (
        <div className='list'>
            <h1>
                Log In
            </h1>
            <div>
                <TextField label='Name' className='input' />
            </div>
            <div>
                <TextField label='Email' className='input' />
            </div>
            <div>
                <Button  className='button'>
                    Book a demo
                </Button>
            </div>

        </div>
    );
};

export default Blank;
