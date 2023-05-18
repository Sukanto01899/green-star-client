import React from 'react';
import Progress from './Progress';

const MyPortfolio = () => {
    return (
        <section>
            <header aria-label="Page ">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div>
    <div class="flex flex-col sm:flex-row justify-center items-center  sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Hi, Iam Sukanto!
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Let's write a new blog post! 🎉
        </p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

        <img className='w-[120px] h-[120px] rounded-full ring-2 ring-universal' src="https://i.ibb.co/g6tWN9m/me.jpg" alt="" />
        
      </div>
    </div>
    </div>

{/* skills */}
    <div>
    <h1 className='text-xl my-6 font-bold'>Skills</h1>
    <di className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Progress skill="Javascript" score="60%"/>
        <Progress skill="React" score="50%"/>
        <Progress skill="Tailwind" score="50%"/>
        <Progress skill="Node JS" score="30%"/>
        <Progress skill="CSS" score="70%"/>
        <Progress skill="Bootstrap" score="50%"/>
        <Progress skill="MongoDB" score="40%"/>
        <Progress skill="HTML" score="80%"/>
    </di>
   </div>

   {/* Project */}

   <div>
     <h1 className='text-xl my-6 font-bold'>Projects</h1>
   </div>

  </div>
</header>


{/* Next */}



 </section>
    );
};

export default MyPortfolio;