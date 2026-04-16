import React from 'react';

const FriendsCard = ({ friend }) => {
    
    const statusStyles = {
        overdue: "bg-red-500 text-white",
        "on-track": "bg-emerald-600 text-white",
        "almost due": "bg-orange-400 text-white",
        active: "bg-blue-500 text-white"
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            
            <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-50 shadow-sm"
            />

            <h3 className="text-lg font-bold text-gray-800 mb-1">{friend.name}</h3>

            <p className="text-gray-400 text-xs font-medium mb-3">
                {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 bg-green-50 text-emerald-600 text-[10px] font-bold uppercase rounded-md tracking-wider"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <button className={`px-6 py-2 rounded-full text-xs font-bold capitalize ${statusStyles[friend.status.toLowerCase()] || "bg-gray-200"}`}>
                {friend.status}
            </button>
        </div>
    );
};

export default FriendsCard;