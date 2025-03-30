import React from 'react'
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";



interface usertype_team {
    id: string;
    name: string;
    status: "available" | "in meeting" | "busy";
    avatar: string;
    initials: string;
}
const color: Record<usertype_team["status"], string> = {
    "available": "green",
    "busy": "red",
    "in meeting": "yellow"
  }

function Usercard_team({user}:{user:usertype_team}) {
    
  function handleClick(a:string,b:string): void {
    console.log("clicked",a,"on",b);
  }

  return (
    <div className='w-full md:w-80 bg-blue-50 text-neutral-900 p-5 mt-5 border-[1px] border-blue-300 rounded-md' key={user.id}>
        <div className='flex items-center justify-between'>
            <h1 className="font-bold text-xl">{user.name}</h1>
            <h3 className='flex items-center gap-2 font-medium'><div className={`w-2 h-2 rounded-full bg-${color[user.status] == "yellow" ? "yellow-400" : `${color[user.status]}-600`}`}></div>{user.status}</h3>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <button className='px-2 py-1 bg-white hover:bg-blue-200 rounded-md flex items-center gap-2' onClick={()=>handleClick("voice",user.name)}><MdOutlineKeyboardVoice/>voice</button>
            <button className='px-2 py-1 bg-white hover:bg-blue-200 rounded-md flex items-center gap-2' onClick={()=>handleClick("video",user.name)}><IoVideocamOutline/>video</button>
            <button className='px-2 py-1 bg-white hover:bg-blue-200 rounded-md flex items-center gap-2' onClick={()=>handleClick("chat",user.name)}><IoChatboxEllipsesOutline/>chat</button>
        </div>
    </div>
  )
}

export default Usercard_team