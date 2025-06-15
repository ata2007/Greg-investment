import React from 'react'

function Row3 () {
  return (
    <> 
        <div className='h-[600px] bg-white flex justify-center'>

            <section className='h-[570px] w-[40%] bg-white'>
                <h1 className='text-4xl font-extrabold '>Here are some options</h1><br /><br />
                <h1 className='text-4xl font-medium '>Tell about your service</h1><br />
                <h1 className='text-2xl font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima ipsum sequi aliquam praesentium doloribus eligendi harum. </h1><br />
                <h1 className='text-4xl font-extrabold'>Tell about advantages</h1><br />
                <h1 className='text-2xl font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas unde et! Lorem ipsum dolor sit amet consectetur.</h1>
                <button className='h-[50px] w-[200px] bg-amber-400 rounded-full text-white'>
                    <h1>Learn more</h1>
                </button>
            </section>

            <section className='h-[570px] w-[40%] bg-white'>
                <h1 className='text-4xl font-extrabold'>Make call to action</h1><br />
                <h3 className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rem. Voluptatibus eius a doloribus aliquid!</h3>
                <br />
                <div className='h-[300px] w-[500px] bg-white mt-10'>

                    <section className='h-[70px] w-[500px] flex gap-10'>
                        <section className='h-[20px] w-[20px] bg-black rounded-full text-white  text-center text-2xl'></section>
                        <section className='h-[20px] w-[200px]'><h1 className='text-amber-400'>Lorem ipsum dolor sit amet</h1></section>
                    </section>
                    <section className='h-[70px] w-[500px] flex gap-10'>
                        <section className='h-[20px] w-[20px] bg-black rounded-full text-white  text-center text-2xl'></section>
                        <section className='h-[20px] w-[200px]'><h1 className='text-amber-400'>Lorem ipsum dolor sit amet</h1></section>
                    </section>
                    <section className='h-[70px] w-[500px] flex gap-10'>
                        <section className='h-[20px] w-[20px] bg-black rounded-full text-white  text-center text-2xl'></section>
                        <section className='h-[20px] w-[200px]'><h1 className='text-amber-400'>Lorem ipsum dolor sit amet</h1></section>
                    </section>
                    <section className='h-[70px] w-[500px] flex gap-10'>
                        <section className='h-[20px] w-[20px] bg-black rounded-full text-white  text-center text-2xl'></section>
                        <section className='h-[20px] w-[200px]'><h1 className='text-amber-400'>Lorem ipsum dolor sit amet</h1></section>
                    </section>
                </div>
            </section>
        </div>
    </>
  )
}

export default Row3
