import React from 'react';
import { IoArrowBack, IoCallOutline, IoChatbubbleOutline, IoVideocamOutline, IoNotificationsOutline, IoArchiveOutline, IoTrashOutline } from "react-icons/io5";
import { useTimeline } from '../../context/TimelineContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FriendDetails = ({ friend, onBack }) => {
    const { addTimelineEntry } = useTimeline();

    const handleCheckIn = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            title: `${type} with ${friend.name}`,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };

        addTimelineEntry(newEntry);
        
        toast.success(`${type} logged on timeline!`, {
            position: "bottom-right",
            autoClose: 2000,
        });
    };

    return (
        <div className="bg-[#f8f9fa] min-h-screen p-4 md:p-12">
            <ToastContainer />
            
           
            <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black transition">
                <IoArrowBack /> Back
            </button>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
                
              
                <div className="md:col-span-4 space-y-4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img 
                            src={friend.picture} 
                            alt={friend.name} 
                            className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-gray-50 shadow-sm" 
                        />
                        <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
                        
                        <div className="mt-2 space-y-2">
                            <span className="block w-fit mx-auto px-3 py-1 bg-red-100 text-red-500 text-[10px] font-bold rounded-full uppercase italic">Overdue</span>
                            <span className="block w-fit mx-auto px-3 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase">Family</span>
                        </div>

                        <p className="mt-6 text-gray-500 italic text-sm">"Former colleague, great mentor"</p>
                        <p className="mt-2 text-xs text-gray-400">Preferred: email</p>
                    </div>

                    
                    <div className="space-y-3">
                        <button className="w-full py-3 bg-white border border-gray-100 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold hover:bg-gray-50 shadow-sm transition">
                            <IoNotificationsOutline size={18}/> Snooze 2 Weeks
                        </button>
                        <button className="w-full py-3 bg-white border border-gray-100 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold hover:bg-gray-50 shadow-sm transition">
                            <IoArchiveOutline size={18}/> Archive
                        </button>
                        <button className="w-full py-3 bg-white text-red-500 border border-gray-100 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold hover:bg-red-50 shadow-sm transition">
                            <IoTrashOutline size={18}/> Delete
                        </button>
                    </div>
                </div>

                
                <div className="md:col-span-8 space-y-6">
                    
                   
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</h4>
                            <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-3xl font-bold text-gray-800">30</h4>
                            <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h4 className="text-xl font-bold text-emerald-800">Feb 27, 2026</h4>
                            <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Next Due</p>
                        </div>
                    </div>

                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-gray-800">Relationship Goal</h4>
                            <p className="text-sm text-gray-500 mt-1">Connect every <span className="font-bold text-black">30 days</span></p>
                        </div>
                        <button className="px-4 py-1 border rounded bg-gray-50 text-xs font-semibold">Edit</button>
                    </div>

                  
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-gray-800 mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition group">
                                <IoCallOutline size={24} />
                                <span className="text-xs font-bold">Call</span>
                            </button>
                            <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition">
                                <IoChatbubbleOutline size={24} />
                                <span className="text-xs font-bold">Text</span>
                            </button>
                            <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition">
                                <IoVideocamOutline size={24} />
                                <span className="text-xs font-bold">Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;