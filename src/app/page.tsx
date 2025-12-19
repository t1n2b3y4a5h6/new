import React from 'react'

const page = () => {
  return (
    <div>
      <figure className='md:flex justify-center items-center bg-slate-500 rounded-xl p-8 md:p-1 dark:bg-slate-800'>      
        <header className="text-center text-5xl"> Hey Buddies! 😀</header>
      </figure>
      <figure className='md:flex justify-between items-center bg-blue-100 rounded-xl p-8 md:p-1 dark:bg-blue-800'>
        <img className="w-24 h-24 rounded-xl" src="/oggy.jpeg" alt="Vibe 2 flex"/>
        <blockquote>
          <p className="text-center justify-left text-3xl"> Hey I am oggy^_^. I was used to entertain people at a time but know that kids who have used to watch me are grown up.
            Here I just came to say Hello 😊 to  all of you.
            This project is designed by Tehreem Ashraf.</p>
        </blockquote>
        <img className="w-30 h-24 rounded-xl" src="/tehreem.jpeg" alt="Vibe 2 flex"/>
      </figure>
      <figure className='md:flex justify-center items-center bg-slate-500 rounded-xl p-8 md:p-1 dark:bg-slate-800'>
      </figure>
      <figure className='md:flex flex-col justify-start bg-green-100 rounded-xl p-8 md:p-1 dark:bg-green-800'>
        <header className="text-left text-4xl"> Message: </header>
        <blockquote>
          <p className="text-left ml-38 text-2xl"> Just enjoy your life. You have only one, don't waste it, you must be precious to yourself no matter what others think.
          </p>
        </blockquote>
        <blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 mt-4 ml-270 dark:text-sky-400">
            Tehreem Ashraf
            </div> 
            <div className="text-dark ml-255 dark:text-sky-400">
             Agentic AI Automation, Developer, PAIB,
              Tech Enthusiast
            </div>
            </figcaption>
        </blockquote>
      </figure>
    </div>
  )
}

export default page