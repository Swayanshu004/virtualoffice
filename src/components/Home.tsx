import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="">
        <div className="px-5">
            <h1 className="font-bold text-2xl">OFFICE</h1>
            <h2>TIME : {"10:30"}</h2>
            <div className="w-full flex justify-between">
                <div className="flex gap-10">
                    <Link to="/">
                        <div className='bg-neutral-50 text-neutral-900 hover:bg-neutral-100 p-5 my-5 border-[1px] rounded-md'>
                            <h1 className="font-bold text-2xl">WORKSPACES</h1>
                            <h3>Team zones and collaboration areas</h3>
                            <h3 className="text-right mt-5 font-semibold">{"2/10"} accupied</h3>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className='bg-neutral-50 text-neutral-900 hover:bg-neutral-100 p-5 my-5 border-[1px] rounded-md'>
                            <h1 className="font-bold text-2xl">MEETING ROOM</h1>
                            <h3>Your dedicated workspace</h3>
                            <h3 className="text-right mt-5 font-semibold">{"2/10"} accupied</h3>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className='bg-neutral-50 text-neutral-900 hover:bg-neutral-100 p-5 my-5 border-[1px] rounded-md'>
                            <h1 className="font-bold text-2xl">CHILL AREA</h1>
                            <h3>Casual chats and coffee breaks</h3>
                            <h3 className="text-right mt-5 font-semibold">{"2/10"} accupied</h3>
                        </div>
                    </Link>
                </div>
                <div className="w-1/4 p-3 rounded-lg border-[1px] border-neutral-300">
                    <h1 className="font-bold text-2xl">USERS</h1>
                    <div className="flex justify-between">
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div>{"6"} Online</h2>
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div>{"3"} In Meeting</h2>
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-600"></div>{"2"} Busy</h2>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home