import React from 'react'

const page = () => {
  return (
    <div>
      <figure className='md:flex justify-center items-center bg-slate-500 rounded-xl p-8 md:p-1 dark:bg-slate-800'>      
        <header className="text-center text-5xl"> Hello world!</header>
      </figure>
      <figure className='md:flex justify-between items-center bg-blue-100 rounded-xl p-8 md:p-1 dark:bg-blue-800'>
        <img className="w-24 h-24 rounded-xl" src="/eagle.png" alt="Vibe 2 flex"/>
        <blockquote>
          <p className="text-center justify-left text-3xl"> Here is Next.js Project tuned with Tailwind CSS.
            An effort to learn the coding and to implement it in own design.</p>
        </blockquote>
        <img className="w-30 h-24 rounded-xl" src="/waqas.jpg" alt="Vibe 2 flex"/>
      </figure>
      <figure className='md:flex justify-center items-center bg-slate-500 rounded-xl p-8 md:p-1 dark:bg-slate-800'>
      </figure>
      <figure className='md:flex flex-col justify-start bg-green-100 rounded-xl p-8 md:p-1 dark:bg-green-800'>
        <header className="text-left text-4xl"> Message: </header>
        <blockquote>
          <p className="text-left ml-38 text-2xl"> Keep Learning, Keep Growing. The journey of coding is endless and full of opportunities.
            Everyday is a new chance to create something amazing. Embrace the challenges, celebrate the victories, and never stop coding!
            coding is not just a skill, it's a superpower that can change the world. This is just the beginning of an exciting adventure.
            The deep you dive into coding, the more you realize its potential to transform ideas into reality. 
            So keep pushing your limits, stay curious, and let your passion for coding lead the way.
          </p>
        </blockquote>
        <blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 mt-4 ml-270 dark:text-sky-400">
            Waqas Awan 
            </div> 
            <div className="text-dark ml-255 dark:text-sky-400">
              AI Automation, Developer, PAIB,
            </div>
            </figcaption>
        </blockquote>
      </figure>
    </div>
  )
}

export default page