import React, { useState } from 'react';
import { useTimeline } from '../../context/TimelineContext';
import { IoCall, IoChatbubble, IoVideocam } from "react-icons/io5";

const Timeline = () => {
    const { timelineData } = useTimeline();
    
    const [filter, setFilter] = useState('All');

    const getIcon = (type) => {
        if (type === 'Call') return <IoCall className="text-gray-600" size={20} />;
        if (type === 'Text') return <IoChatbubble className="text-gray-600" size={20} />;
        if (type === 'Video') return <IoVideocam className="text-gray-600" size={20} />;
        return null;
    };

    
    const filteredData = filter === 'All' 
        ? timelineData 
        : timelineData.filter(item => item.type === filter);

    return (
        <div className="bg-[#f8f9fa] min-h-screen p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Timeline</h1>
                
               
                <div className="mb-8">
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full md:w-48 p-2.5 outline-none shadow-sm"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {filteredData.length === 0 ? (
                        <div className="text-center py-20 text-gray-400">
                            {filter === 'All' ? "No activity yet." : `No ${filter} logs found.`}
                        </div>
                    ) : (
                        filteredData.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        {getIcon(item.type)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                                    </div>
                                </div>
                                <div className="text-gray-300">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;