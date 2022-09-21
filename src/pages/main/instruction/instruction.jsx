import React from 'react';
import Paragraph from "../../../components/paragraph/paragraph";
import {Button} from "@mui/material";
import './instruction.scss'

const Instruction = () => {
    return (
        <div className='instruct'>
            <div className='desk'>
                <div className='star'>
                    <h3 >
                        Ready to Get started?
                    </h3>
                    <p>
                        When pattern is mentioned in interior design,
                        it is easy to associate it with a geometric
                        patterned wallpaper or colourful prints on interior fabrics.
                    </p>
                    <Button className='button' >
                        Contact US
                    </Button>
                </div>
                <div>
                    <div style={{ display:"flex", flexDirection:"column"}}>
                        <Paragraph
                            title='What can I do to protect our planet?'
                            text='Not to make an open fire in nature and to
                        clean up litter; not to pollute open water bodies;
                        to switch to alternative energy sources; to reduce
                        the use of non-renewable resources'
                            show={true}
                        />
                        <Paragraph
                            title='How to save nature ecology?'
                            show={false}
                        />
                        <Paragraph
                            title='What is nature conservation?'
                            show={false}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Instruction;
