import React from 'react';

const PopupBG = ({children}) => {
    return (
        <div className='fixed top-0 left-0 z-50 backdrop-blur-[1px] h-screen w-screen flex justify-center items-center'>
            {children}
        </div>
    );
};

export default PopupBG;