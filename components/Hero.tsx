import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackground } from './ui/GridBackground'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {MagicButton} from './ui/MagicButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen animate-spotlight' fill='white' />
        <Spotlight className='top-10 left-full  h-[80vh] w-[50vw] animate-spotlight' fill='purple' />
        <Spotlight className='top-28 left-80  h-[80vh] w-[50vw] animate-spotlight' fill='blue' />
      </div>
      <GridBackground />
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xl text-center text-blue-100 max-w-120'>
            CRAFTING PIXELS WITH PURPOSE
            </h2> 
            <TextGenerateEffect 
            words='Building Digital Experiences Users Remember, Not Just Interfaces They Use'
            className='text-center text-[40px] md:text-4xl lg:text-5xl'
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
              Hi, I'm Priya, a Frontend Engineer with 4+ years of experience building high-performance applications across gaming, AI, and enterprise platforms with React, TypeScript, and a deep focus on usability.
            </p>
            <a href='/about' > 
            <MagicButton title='Show My Work'/>
            </a>

        </div>
        
      </div>
    </div>
  )
}

export default Hero