import React from 'react';
import VideoCall from './VideoCall';
import Chats from './Chats';

function Video() {
    return (
        <div className='w-full flex flex-col lg:flex-row items-start justify-between'>
            <div className='w-full'>
                <h2>Video</h2>
                <VideoCall />
            </div>
            <div>
                <h2>Chats</h2>
                <Chats />
            </div>
        </div>
    );
}

export default Video;
