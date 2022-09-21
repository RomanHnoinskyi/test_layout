import React from 'react';
const ModalMobile = () => {
    return (
        <div className='modal'>
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
                <button style={{width:330, borderRadius:20, height:48,}} color={'white'} >
                    Apply
                </button>
            </div>

        </div>
    );
};

export default ModalMobile;
