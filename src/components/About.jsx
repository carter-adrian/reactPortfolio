import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quae quibusdam commodi sed veniam, sit, ratione autem, repudiandae necessitatibus beatae culpa amet unde dolore deleniti enim deserunt! Ducimus temporibus eaque alias, praesentium recusandae ad accusantium delectus quia atque quas id repudiandae culpa eius quisquam cupiditate sunt iure hic harum quaerat!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla delectus temporibus ut consectetur? Praesentium pariatur commodi inventore amet laudantium distinctio in accusantium eaque, nobis eum tenetur dolores at ipsam deserunt nemo ea a quam atque sed! Harum, nostrum atque, itaque consequatur nihil explicabo ea dolorum reiciendis odit aspernatur dolores.
            </p>
        </div>
    </div>
  )
}

export default About