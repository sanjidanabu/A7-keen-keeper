import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';


const CardUi = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
       
        fetch('Friends.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="bg-[#f8f9fa] min-h-screen p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
               
                <h2 className="text-xl font-bold text-gray-800 mb-8 px-2">Your Friends</h2>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        friends.map(friend => (
                            <FriendsCard
                                key={friend.id} 
                                friend={friend} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CardUi;