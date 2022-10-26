import React from 'react';
import titleBottom from '../../assets/images/title.png'

const Title = ({title,content}) => {
    return (
        <div className='text-center pb-12 text-white'>
        <h3 className='text-4xl font-barlow font-semibold'>{title}</h3>
        <img src={titleBottom} alt="" className='m-auto py-4'/>
        <div className='pt-3 px-5 md:px-28'>
            <p>{content ? content : undefined}</p>
        </div>
    </div>
    );
};

export default Title;