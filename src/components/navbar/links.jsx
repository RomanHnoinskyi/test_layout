import React from 'react';
import { Fab} from "@mui/material";

const Links = ( ) => {
    return (
        <>
            <div className='links'>
                <div>
                    <a href='/'>
                        Home
                    </a>
                </div>
                <div>
                    <a href='/mission'>
                        Our mission
                    </a>
                </div>
                <div>
                    <a href='places'>
                        Places
                    </a>
                </div>
               <div>
                   <a href='team'>
                       Team
                   </a>
               </div>

            </div>

        </>
    );
};

export default Links;
