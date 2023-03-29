import React from 'react';

const Description = ({description}) => {
    return (
        <div id='description' className='bg-white p-4'>
            <h2 className='text-xl font-semibold mb-2'>Description</h2>
            <p className='text-sm'>{description}</p>
        </div>
    );
};

export default Description;