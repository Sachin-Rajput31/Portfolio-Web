import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-gradient-to-r from-zinc-600 to-transparent">
          <div className="container m-auto px-6 text-gray-700 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 drop-shadow-lg">
                      <img
                           src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-white font-bold md:text-4xl shadow-xl  shadow-gray-100 ">
                          Welcome friends, seekers to my website !!
                      </h2>
                      <br/>
                      <p className="mt-6 text-black shadow-md shadow-green-100 font-semibold">
                        Hello, My name is <span className='font-semibold text-yellow-600 '>Sachin Jyotesing Girase</span>, Currently I am pursuing my graduation in field of <span className='text-xl text-yellow-600'>BCA(Bachelor of Computer Application )</span> 
                         I created this website for my practice or be showcase my skills using my coding knowledge. I am good at web development and beginner at dsa and also good at AI,ML and  my 2nd year overall CGPA is <b>9.14</b>. I always enjoys coding challenges meanwhile its became my strength now.Thanks for reaching me!!.

                      </p>
                      <br/>
                      <p className="mt-4 text-slate-700 shadow-md  font-extrabold shadow-blue-300">
                        --This  is my personal website or portfolio website you can see additional options here like my gitHub profile!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}