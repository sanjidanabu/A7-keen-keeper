import React from 'react';
import { useTimeline } from '../../context/TimelineContext'; 
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Status = () => {
    const { timelineData } = useTimeline();

   
    const statsData = [
        { name: 'Text', value: timelineData.filter(item => item.type === 'Text').length, color: '#8884d8' },
        { name: 'Call', value: timelineData.filter(item => item.type === 'Call').length, color: '#00C49F' },
        { name: 'Video', value: timelineData.filter(item => item.type === 'Video').length, color: '#FFBB28' },
    ];

   
    const displayData = timelineData.length > 0 ? statsData : [
        { name: 'Text', value: 1, color: '#8884d8' },
        { name: 'Call', value: 1, color: '#00C49F' },
        { name: 'Video', value: 1, color: '#FFBB28' },
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen p-6 md:p-12 font-sans">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Friendship Analytics</h1>

               
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">By Interaction Type</h3>
                    
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={displayData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70} 
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {displayData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default Status;