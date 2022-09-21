import React from 'react';
import './main.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='contHead'>
                <h1>
                    Contacts
                </h1>
                <p>
                    2019 Rootz Foundation. 
                </p>
                <p>
                    All rights reserved
                </p>
            </div>
            <div className='details'>
                <div>
                    <h4>
                        Headquarters
                    </h4>
                    <p>
                        1234 Taliban Los Angeles,
                        <br/>
                        La 1234567 (123)
                        <br/>
                        456-7890
                    </p>
                </div>
                <div>
                    <div>
                        <h4>
                            Social media
                        </h4>
                    </div>
                    <div>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
