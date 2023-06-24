import React from 'react'
import { logo } from '../assets'
import '../App.css';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="" className='w-12 object-contain' />
            <div className='flex justify-between'><button type='button' 
            onClick={() => window.open('https://twitter.com/KarkiDrishya')}
            className='blue_btn mr-2'
            >
              Twitter
            </button>
            <button type='button' 
            onClick={() => window.open('https://github.com/drishyakarki')}
            className='black_btn mr-2'
            >
              GitHub
            </button>
            <button type='button' 
            onClick={() => window.open('https://www.linkedin.com/in/drishya-karki-6295231a0/')}
            className='aqua_btn'
            >
              LinkedIn
            </button>
            </div>
</nav>
            <h1 className='head_text'>
        Hey, there you look like you can use an <br className='max-md:hidden' />
        <span className='red_gradient '>Article Summarizer!</span>
      </h1>
        
      <h2 className="desc">
      Effortlessly condense lengthy articles into concise summaries with
      our powerful tool. Save valuable time by extracting the most 
      important information and key points from any text.Simplify your reading 
      experience and enhance productivity with this essential tool in 
      your arsenal.
      </h2>
    </header>
  )
}

export default Hero