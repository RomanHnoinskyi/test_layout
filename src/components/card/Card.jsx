import React  from 'react';
import list from '../../assets/img/photo/nature/list.svg'
import './card.scss'

const Card = (  {logo, title, text, focus }  ) => {



    return (
        <div className='cardmedia'>

            <div className='cardconteiner'
                 style={{backgroundImage:`url(${list})`, height:250, width:250}}>
                 {/*style={{backgroundImage:focus ? `url(${list})`:`url(${logo})`,*/}
                 {/*height:focus ? 300 : 250,*/}
                 {/*width:focus ? 300 : 250,}}*/}

                {/*{ focus && (*/}
                    <div >
                        <div >
                            <img src={logo} alt={title}  className='prev'/>
                        </div>
                        <div>
                            <p>{title}</p>
                            <p>{text}</p>
                        </div>
                    </div>
               {/*)}*/}
                {/*{!focus && (*/}
                {/*    <p style={{fontSize:24, color:"white"}}>*/}
                {/*        {title}*/}
                {/*    </p>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default Card;
