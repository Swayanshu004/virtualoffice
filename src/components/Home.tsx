import { Link } from "react-router-dom"
import Usercard from "./Usercard"
import Clock from "./Clock";
import Officeareacard from "./Officeareacard";

function Home() {

    const areas = [
        {
          name: "WORKSPACES",
          description: "Team zones and collaboration areas",
          accupencyTotal: 50,
          accupencyCurrent: 13,
          path: "/workspace",
        },
        {
          name: "MEETING ROOM 1",
          description: "Your dedicated workspace",
          accupencyTotal: 15,
          accupencyCurrent: 7,
          path: "/meeting",
        },
        {
            name: "CHILL AREA",
            description: "Casual chats and coffee breaks",
            accupencyTotal: 10,
            accupencyCurrent: 2,
            path: "/chill",
        },
        {
          name: "MEETING ROOM 2",
          description: "Your dedicated workspace",
          accupencyTotal: 20,
          accupencyCurrent: 13,
          path: "/meeting",
        },
      ] as const;
    const users = [
        {
            name:"amit",
            avatar: "",
            status: "busy"
        },
        {
            name:"swayanshu",
            avatar: "",
            status: "available"
        },
        {
            name:"ritik",
            avatar: "",
            status: "in meeting"
        },
        {
            name:"subhram",
            avatar: "",
            status: "busy"
        },
        {
            name:"amit",
            avatar: "",
            status: "busy"
        },
        {
            name:"swayanshu",
            avatar: "",
            status: "available"
        },
        {
            name:"ritik",
            avatar: "",
            status: "in meeting"
        },
        {
            name:"subhram",
            avatar: "",
            status: "busy"
        },
        {
            name:"amit",
            avatar: "",
            status: "busy"
        },
        {
            name:"swayanshu",
            avatar: "",
            status: "available"
        },
        {
            name:"ritik",
            avatar: "",
            status: "in meeting"
        },
        {
            name:"subhram",
            avatar: "",
            status: "busy"
        },
    ] as const;

  return (
    <div className="w-full">
        <div className="px-5">
            <h1 className="font-bold text-2xl">OFFICE</h1>
            <Clock />
            <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="md:w-3/4 h-fit flex gap-10 flex-wrap">
                    {areas.map((item, index)=>(
                        <Officeareacard area={item} key={index}/>
                    ))}
                </div>
                <div className="w-full max-h-screen overflow-y-scroll scrollbar-hide md:w-1/4 my-5 p-3 rounded-lg border-[1px] border-neutral-300">
                    <h1 className="font-bold text-2xl">USERS</h1>
                    <div className="flex justify-between">
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div>{"6"} Online</h2>
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div>{"3"} In Meeting</h2>
                        <h2 className="py-1 px-2 rounded-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-600"></div>{"2"} Busy</h2>
                    </div>
                    <div>
                        <ul>
                            {
                                users.map((item,index)=>(
                                    <li key={index}>
                                        <Usercard user={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home