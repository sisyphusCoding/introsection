import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"


import down from '../public/down.svg'
import client1 from '../public/client-1.svg'
import client2 from '../public/client-2.svg'
import client3 from '../public/client-3.svg'
import client4 from '../public/client-4.svg'
import HeroMobile from '../public/image-hero-mobile.png'
import HeroDesktop from '../public/image-hero-desktop.png'
import { useState } from 'react'

import calendar from '../public/icon-calendar.svg'
import planning from '../public/icon-planning.svg'
import reminders from '../public/icon-reminders.svg'
import todo from '../public/icon-todo.svg'


const client:string[]  = [client1 , client2 , client3 , client4]

const icon : string[] = [todo, calendar , reminders , planning ]

const iconText : string[] = ['todo list', 'calendar' , 'reminders' , 'planning' ]


const variants:any = {
  
  enter : {opacity: 1 , y :0 , display: 'flex' } ,
  exit : {opacity : 0 , y : -10 , 
  transitionEnd: {
      display: "none",
    },
  },
transition: {
      duration: 1, 
    },
}


const Home: NextPage = () => {

  const [ham , setHam] = useState<boolean>(false)

  const [droptwo , setDroptwo] = useState<boolean>(false)

  const [dropone , setDropone] = useState<boolean>(false)


  return (
    <div className='flex sm:px-3 lg:px-5 relative bg-gray-200 items-center justify-start
      flex-col overflow-hidden
      min-w-full min-h-screen'>

      <Head>

        <title>Intro Section</title>
        <meta name="description" content="Frontend Mentor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex h-fit w-full items-center gap-10 justify-between lg:p-3 p-5 relative ' > 

        <h1>snap</h1>

        <div 
          className={`gap-5 z-10 flex lg:items-center lg:justify-start lg:pt-0
lg:w-5/6 lg:static lg:h-fit lg:bg-transparent lg:flex-row lg:pl-0
lg:translate-x-0 lg:backdrop-blur-0 lg:shadow-none
absolute md:w-1/2 w-5/6 h-screen top-0 bg-[rgba(255,255,255,.2)] -right-6

flex-col justify-start backdrop-blur-2xl items-start pl-7 pt-44
transition-all ease duration-1000 text-gray-600 shadow-[-1rem_0_2rem_rgba(0,0,0,.7)]
${ham ? 'translate-x-0' : 'translate-x-[100vh]'}   

`} > 
          <button
            onClick={()=>{setDropone(!dropone)}}
            className='
            w-1/2 
            lg:pl-3
            lg:py-3
            rounded-2xl
            lg:hover:shadow-inner
            lg:w-auto 
            transition-all duration-300 ease-in
            grid-cols-2 grid place-items-center' > 
            <h4  className='w-3/6' >Features</h4>
            <Image 
              className={`transition-all duration-500 ease 
                ${dropone? 'rotate-180' : 'rotate-0'}`}  
              alt='dropdown' src ={down} height={15} width={15} /> 
         <AnimatePresence exitBeforeEnter>   
            <motion.div 
      
           
       animate={dropone ? "enter" : "exit"}
       
        variants={variants}     
            className= {`
            mt-2
            hidden 
            ml-32 lg:ml-0
            lg:absolute lg:top-10 lg:shadow-2xl 
            top-0 flex-col shadow-none
            lg:backdrop-blur-3xl lg:bg-gray-200
            lg:px-5 lg:py-2 rounded-lg z-10
            w-36 lg:w-fit
            
            static items-baseline pl-2 gap-2 justify-around`}>
              {iconText.map((item,index) =>(
                  <h5 className='flex w-full flex-row p-0.5 lg:gap-4 gap-2 items-center justify-between' >


                  <Image src={icon[index]} alt='ko' height={18} width={18} objectFit='contain' />
            
                  <span className='capitalize w-4/6 text-left text-gray-500 hover:text-gray-900' >{item}</span>  
                  
                      
                </h5>
              ))}


            </motion.div>
          </AnimatePresence>
          </button>
          <button
            onClick={()=>{setDroptwo(!droptwo)}}
            className='
              w-1/2 
            lg:pl-3
            lg:py-3
            rounded-2xl
            lg:hover:shadow-inner
            lg:w-auto
            row-start-1
            transition-all duration-300 ease-in
            grid-cols-2 grid place-items-center'  

          > 
            <h4 className='w-3/6' >Company</h4>
            <Image
              className={`transition-all duration-500 ease    
                ${droptwo? 'rotate-180' : 'rotate-0' } `} 
              alt='dropdown' src ={down} height={15} width={15} /> 
         

 <AnimatePresence exitBeforeEnter>   
            <motion.div 
      
           
       animate={droptwo ? "enter" : "exit"}
       
        variants={variants}     
            className= {`
            hidden
            mt-2
            ml-32 lg:ml-0
            lg:absolute lg:top-10 lg:shadow-2xl 
            top-0 flex-col shadow-none
            lg:backdrop-blur-3xl lg:bg-gray-200
            lg:px-5 lg:py-2 rounded-lg z-10
            w-36 lg:w-fit 
            static items-baseline pl-2 gap-2 justify-around`}>
            <h5 className='hover:text-black w-full text-left' >History</h5>
              <h5 className='hover:text-black w-full text-left' >Our Team</h5>
              <h5 className='hover:text-black w-full text-left' >Blog</h5>
            </motion.div>
            </AnimatePresence>

          </button>
          <h4 className='w-fit ml-5 lg:ml-0  text-justify' >Carrers</h4>
          <h4 className='w-fit ml-5 lg:ml-10 text-justify' >About</h4>
        </div>  
        <div
          onClick={()=>{setHam(!ham)}} 

          className='lg:hidden h-[4vh] cursor-pointer w-10 items-start flex relative flex-col z-10' >

          <div className={` transition-all duration-700 ease absolute top-0 left-0 h-[.5vh] w-[6vh] rounded-sm bg-gray-700 origin-left ${ ham ? 'rotate-[45deg]  -translate-y-1 ' : 'rotate-0'} `} ></div>
          <div className={` transition-all duration-700 ease absolute top-1/2 -translate-y-1/2 left-0 h-[.5vh] w-[6vh] rounded-sm bg-gray-700 ${ham ? 'opacity-0' : 'opacity-100'} ` } ></div>   
          <div className={` transition-all duration-700 ease absolute bottom-0 left-0  h-[.5vh] w-[6vh] rounded-sm bg-gray-700 origin-left ${ ham ? '-rotate-[45deg] translate-y-1 ' : 'rotate-0'}`} ></div> 



        </div>        

        <div className='hidden lg:flex gap-5 items-center justify-between ' >
          <h5
            className='cursor-pointer transiton-all ease duration-200 hover:text-gray-900 text-gray-500'
          >Login</h5>
          <h5
            className='
            border-2
            border-gray-500
            hover:border-gray-900
            px-5 py-2 rounded-xl
            cursor-pointer transiton-all ease duration-200 hover:text-gray-900 text-gray-500'
          >Register</h5>
        </div>

      </div>




      <main className='w-10/12 h-[82vh] flex flex-col-reverse lg:flex-row items-center
        justify-around gap-10  
        lg:mt-12
        py-10 
        '>


        <div className='
          
          sm:justify-center    
          flex-1 flex-col items-center lg:items-start justify-center gap-5 py-1 px-5 flex w-5/6 ' >
          <h1
            className='sm:whitespace-pre-line w-full md:text-left text-center whitespace-normal sm:text-4xl md:text-6xl lg:text-8xl' 

          >Make <br className='md:block hidden ' /> remote Work</h1>

          <p
            className='text-gray-500 text-center lg:text-left w-5/6 sm:text-xs md:text-xl lg:text-2xl  '
          >Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. Learn more</p>

          <button

            className='py-2 px-4 bg-black text-white rounded-2xl
            border-2
            shadow-[0_0_1.7rem_rgba(0,0,0,.4)]
            border-black
            transition-all duration-300 ease hover:text-black hover:bg-transparent'

          >Learn More</button>


          <div className='flex flex-row items-center justify-evenly w-full ' >
            {client.map((item) => (

              <Image src={item} alt={item}  objectFit='contain'  height={30} width={100} key={item} />
            ))}
          </div>


        </div>

        <div className='flex-1 hidden lg:block  '>
          <Image src={HeroDesktop} objectFit='contain' height={700} width={500} alt='hero image' /> 
        </div> 

        <div className='mt-10 lg:hidden '>
          <Image src={HeroMobile} height={350} width={470}  alt='hero image' /> 
        </div> 
      </main>

    </div>
  )
}

export default Home
