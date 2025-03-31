import React from 'react'
import { IoVideocamOutline } from 'react-icons/io5';

interface meetingType {
    meetingRoomId: string;
    topic: string;
    participants: readonly string[];
    time: string;
}

function Meetingcard({meet}:{meet:meetingType}) {
  return (
    <div className='w-full md:w-2/5 bg-blue-50 text-neutral-900 p-5 mt-5 border-[1px] border-blue-300 rounded-md' key={meet.meetingRoomId}>
        <div className=' flex items-center justify-between'>
            <div className=''>
                <h1 className="font-bold text-xl">{meet.topic}</h1>
                <h3 className='flex items-center gap-2 font-medium'>Room no. {meet.meetingRoomId}</h3>
            </div>
                <button className='px-2 py-1 bg-white hover:bg-blue-200 duration-300 rounded-md flex items-center gap-2 cursor-pointer'><IoVideocamOutline/> Join</button>
        </div>
        <div>
            <h3 className='font-semibold mt-3'>Participants :</h3>
            <div className='flex flex-warp gap-10 mt-2'>
                {
                    meet.participants.map((id)=>(
                        <h4 className='bg-blue-100 border-[1px] border-blue-300 px-3 py-2 w-fit rounded-lg'>{id}</h4>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Meetingcard