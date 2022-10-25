import React from 'react';
import titleBottom from '../../assets/images/title.png'

const Title = () => {
    return (
        <div className='text-center pb-12'>
        <h3 className='text-3xl'>Popular Course</h3>
        <img src={titleBottom} alt="" className='m-auto py-4'/>
        <div className='text-[#666666] pt-3'>
            <p>Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna</p>
             <p>vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
        </div>
    </div>
    );
};

export default Title;