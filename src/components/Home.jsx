import React from 'react'
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
            <div>
                <h2>I'm a Full Stack Developer</h2>
                <p>           
                     I have 8 years of experience building and desgining software.
                     Currently, I love to work on web application using technologies like
                     React, Tailwind, Next JS and GraphQL.
                </p>

                <div>
                    <button>
                       Portfolio
                       <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home