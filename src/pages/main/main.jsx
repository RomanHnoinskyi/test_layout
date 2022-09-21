import React from 'react';
import './main.scss'
import People from "./previe/team/people";
import Form from "./form/form";
import Instruction from "./instruction/instruction";
import Previe from "./previe/previe";
import Footer from "./footer";
import Carousel from "./carousel/carousel";
const Main = () => {
    return (
        <div className='start'>
            <Previe/>
            <People/>
            <Form/>
            <Instruction/>
            <Carousel/>
            <Footer/>
        </div>
    );
};

export default Main;
