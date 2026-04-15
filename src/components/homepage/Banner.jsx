import React from 'react';
import { HiPlus } from "react-icons/hi"; 

const Banner = () => {
    return (
        <section className=" py-16 px-4 bg-gray-100">
           
            <div className="max-w-6xl mx-auto">
                
              
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1a2b3c] mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                        relationships that matter most.
                    </p>

                  
                    <button className="bg-[#1d4235] hover:bg-[#16352a] text-white px-6 py-2.5 rounded-md flex items-center gap-2 mx-auto transition-all">
                        <HiPlus className="text-lg" />
                        <span className="font-medium">Add a Friend</span>
                    </button>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 
                    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 text-center">
                        <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">10</h2>
                        <p className="text-gray-400 text-sm font-medium">Total Friends</p>
                    </div>

                   
                    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 text-center">
                        <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">3</h2>
                        <p className="text-gray-400 text-sm font-medium">On Track</p>
                    </div>

                  
                    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 text-center">
                        <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">6</h2>
                        <p className="text-gray-400 text-sm font-medium">Need Attention</p>
                    </div>

                 
                    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 text-center">
                        <h2 className="text-4xl font-bold text-[#1a2b3c] mb-1">12</h2>
                        <p className="text-gray-400 text-sm font-medium">Interactions This Month</p>
                    </div>
                </div>

               
                <div className="border-b border-gray-100 mt-16 w-full"></div>

            </div>
        </section>
    );
};

export default Banner;