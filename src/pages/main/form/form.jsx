import React from 'react';
import './form.scss'
import Blank from "../../../components/blanck/blank";
import Description from "../../../components/blanck/description";
const Form = () => {
    return (
        <div style={{ display:"flex", justifyContent:"center"}}>
            <div className='form'>
                <Description/>
                <Blank/>
            </div>
        </div>

    );
};

export default Form;
