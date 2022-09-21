import React from 'react';
import './paragraph.scss'

const Paragraph = ({title, text, show}) => {
    return (
        <div>
            <div className='par'>
                <div style={{textAlign:"start"}}>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {text}
                    </p>
                </div>
                <div>
                    <button style={{width:40, height:40, backgroundColor:'#F2726C', borderRadius:50}}>
                        { show && (
                            <div>
                                -
                            </div>
                        ) }
                        {!show && (
                            <div>
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
