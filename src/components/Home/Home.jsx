import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full inset-0 bg-gradient-to-r from-purple-400 to-transparent  
         max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 px-4 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-2xl typing-effect bg-gradient-to-r from-violet-700 to-emerald-500 bg-clip-text text-transparent font-extrabold  drop-shadow-xl  font-semibold sm:text-3xl">
                            Hello! My Name is Sachin Girase.
                        </h2>
                        
                        <h4 className='text-3xl  bg-gradient-to-r from-black to-slate-400 bg-clip-text text-transparent font-thin'>I am webDeveloper! <br/>
                        <span >Welcome to my portfolio Website... </span>                    
</h4>


                        {/* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */}
                    </div>
                </div>

                <div className="absolute left-36 inset-0 w-full h-full sm:my-20 sm:pt-1 pt-12  ">
               
                    <img className="skew-y-12  rounded-3xl shadow-2xl shadow-black hover:skew-y-0" src="/Images/photo1.jpg" alt="image"  width={300} />
               
                </div>
               
            </aside>

            <div className="grid place-items-center rounded-lg sm:mt-20">
                <img className="sm:w-96 w-48 lg-w-48 object-cover   backdrop-blur-lg bg-opacity-50 shadow-2xl p-6 " src="/Images/namaste.jpg" alt="image2"  />
            </div>

            <h1 className="text-center text-gray-600 text-2xl sm:text-5xl py-10 font-medium animate-pulse  tracking-tight">Thanks for Reaching Me🙏!</h1>
        </div>
    );
}