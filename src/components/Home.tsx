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
          name: "MEETING ROOMS",
          description: "Dedicated workspace",
          accupencyTotal: 5,
          accupencyCurrent: 2,
          path: "/meeting",
        },
        {
            name: "CHILL AREA",
            description: "Casual chats and coffee breaks",
            accupencyTotal: 10,
            accupencyCurrent: 2,
            path: "/chill",
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
        <div className="w-full">
            <div className="bg-blue-200 px-5 py-3 rounded-md">
                <h1 className="font-bold text-2xl">OFFICE</h1>
                <Clock />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="w-full lg:w-3/4 h-fit grid grid-cols-1 lg:grid-cols-3 gap-2.5">
                    {areas.map((item, index) => (
                        <Officeareacard area={item} key={index} />
                    ))}
                </div>

                <div className="w-full lg:w-1/4 max-h-screen overflow-y-scroll scrollbar-hide py-5 p-3 mt-5 rounded-lg bg-blue-50 border-[1px] border-blue-300">
                    <h1 className="font-bold text-2xl">USERS</h1>
                    <div className="flex flex-col lg:flex-row justify-between">
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