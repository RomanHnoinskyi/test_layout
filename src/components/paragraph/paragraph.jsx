import React from 'react';
import { useState } from 'react';
import './paragraph.scss'

const Paragraph = ({title, text}) => {

    const [show, setShow] = useState(false)

   const closeText = () => {
        setShow(false)
    }

   const openText = () => {
        setShow(true)
    }



    return (
        <div>
            <div className='par'>
                <div style={{textAlign:"start"}}>
                    <h3>
                        {title}
                    </h3>
                    { show && (
                         <p>
                         {text}
                     </p>
                        ) }
                    
                </div>
                <div>
                    <button style={{width:40, height:40, backgroundColor:'#F2726C', borderRadius:50}}>
                        { show && (
                            <div onClick={closeText}>
                                -
                            </div>
                        ) }
                        {!show && (
                            <div onClick={openText}>
                                +
                            </div>
                        )}
                    </button>
                </div>
            </div>
            <hr/>
        </div>

    );
};

export default Paragraph;
