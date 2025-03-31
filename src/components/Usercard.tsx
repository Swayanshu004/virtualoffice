import React from 'react'

interface usertype {
  name: string;
  avatar: string;
  status: "available" | "busy" | "in meeting";
}

const color: Record<usertype["status"], string> = {
  "available": "green",
  "busy": "red",
  "in meeting": "yellow"
}

function Usercard({ user }: { user: usertype }) {
  console.log(color[user.status]);
  
  return (
    <div className='w-full bg-white flex items-center gap-5 my-4 rounded-md p-2'>
      <div className='w-12 h-12 bg-blue-800 rounded-full overflow-hidden'></div>
      <div>
        <h1>{user.name}</h1>
        <h3 className='flex items-center gap-2'><div className={`w-2 h-2 rounded-full bg-${color[user.status] == "yellow" ? "yellow-400" : `${color[user.status]}-600`}`}></div>{user.status}</h3>
      </div>
    </div>
  )
}

export default Usercard