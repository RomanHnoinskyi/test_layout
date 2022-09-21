import React from 'react';
import p1 from '../../../../assets/img/photo/people/img 1.svg'
import p2 from '../../../../assets/img/photo/people/img 2.svg'
import p3 from '../../../../assets/img/photo/people/img 3.svg'
import v1 from '../../../../assets/img/photo/people/Vector 1.svg'
import v2 from '../../../../assets/img/photo/people/Vector 2.svg'
import './team.scss'
const People = () => {
    return (
        <div>
            <div className='teamHeader'>
                <h1> Our Top team</h1>
                <h4 style={{width:352}}>
                    Learn more about how you can save our planet's nature.
                </h4>
            </div>
            <div className='teamPhoto' >
                <div className='photoPerson'>
                    <img src={p1} alt='people#1' className='photoPerson'/>
                </div>
                        <div >
                            <img src={v1} alt='vector#1' className='vector1'/>
                        </div>
                <div className='chet'
                >
                    <img src={p2} alt='people#2' className='photoPerson'/>
                </div>
                        <div>
                            <img src={v2} alt='vector#2' className='vector2'/>
                        </div>
                <div className='photoPerson'>
                    <img src={p3} alt='people#3' className='photoPerson'/>
                </div>
            </div>

        </div>
    );
};

export default People;
