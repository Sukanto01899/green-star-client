import React from 'react';

const Specification = ({specification}) => {
    
    return (
        <div id='specification' className='bg-white p-4'>
            <h1 className='text-black font-semibold text-xl'>Specification</h1>
            {/* Key Features */}
            <div>

                {specification?.map((spec, i) => (
                    <>
                    <div key={i} className='w-full bg-universal text-white p-2 my-3'>{spec.title}</div>
                     {spec?.prop?.map((pro, i) => (
                        <div key={i} className='flex border-b-2 py-2 px-4'>
                        <h3 className='w-[200px]'>{pro.title}</h3>
                        <ul className='text-sm'>
                            {pro?.features.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                        </div>
                     ))}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Specification;