import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Row6() {
  return (
    <>
        <div className='h-[400px] bg-white flex justify-center items-center'>
            <section className='h-[300px] w-[20%] bg-white flex justify-center items-center'>
                <section className='h-[70px] w-[70px] bg-black rounded-full text-white flex justify-center items-center text-5xl'><FaArrowLeft/></section>
            </section>
            <section className='h-[300px] w-[60%] bg-yellow-300 flex'>
                <section className='h-[300px] w-[40%] bg-emerald-400 bg-[url(sitdown.jpeg)] ugo'></section>
                <section className='h-[300px] w-[65%] bg-white'>
                  <h1 className=' text-4xl font-extrabold flex'>John Jackson, <h1 className='text-4xl font-normal'>Developer</h1></h1><br />
                  <h1>There are two types of people who will tell you that can not make a difference in this world those who are afraid to try and those who are afraid you will succeed</h1><br />
                  <button className='h-[50px] w-[150px] bg-black  text-white'>Read more</button>
                </section>
            </section>
            <section className='h-[300px] w-[15px% bg-white flex justify-center items-center'>
              <section  className='h-[70px] w-[70px] bg-black rounded-full text-white flex justify-center items-center text-5xl'><FaArrowRight/></section>
            </section>
        </div>
    </>
  )
}

export default Row6