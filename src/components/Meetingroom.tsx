import React from 'react'
import Meetingcard from './Meetingcard';


const ongoingMeetings = [
    {
      meetingRoomId: "MR001",
      topic: "Sprint Planning",
      participants: ["DEVJD0", "DEVJS1", "DEVMJ2", "PROED0"],
      time: "10:00 AM - 11:30 AM",
    },
    {
      meetingRoomId: "MR002",
      topic: "UX Design Review",
      participants: ["DESAC0", "DESLP1", "DESTR2", "DESMB3"],
      time: "11:00 AM - 12:00 PM",
    },
] as const;
const upcomingMeetings = [
    {
      meetingRoomId: "MR003",
      topic: "Marketing Strategy",
      participants: ["MBRSW0", "MBRTB1", "MBRKE2", "MBRJR3"],
      time: "1:00 PM - 2:00 PM",
    },
    {
      meetingRoomId: "MR004",
      topic: "Backend Architecture Discussion",
      participants: ["DEVJD0", "DEVAR3", "DEVSC4", "DEVDM5"],
      time: "2:30 PM - 4:00 PM",
    },
    {
      meetingRoomId: "MR005",
      topic: "Data Analytics Planning",
      participants: ["DANSG0", "DANNP1", "DANHC2", "DANDS3"],
      time: "4:30 PM - 5:30 PM",
    },
    {
      meetingRoomId: "MR006",
      topic: "Customer Support Training",
      participants: ["CSURK0", "CSUJW1", "CSUAB2", "CSUBH3"],
      time: "6:00 PM - 7:00 PM",
    },
] as const;

function Meetingroom() {
  return (
    <div className='w-full'>
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Meeting Rooms</h2>
            <p className="text-muted-foreground">Team zones and collaboration areas</p>
        </div>
        <div className="w-full">
            <h1 className="font-bold text-2xl mt-7 py-2 border-b-[1px]">Upcoming Meetings</h1>
            <div className="w-full h-fit flex flex-wrap gap-10">
            {
                ongoingMeetings.map((item)=>(
                    <Meetingcard meet={item}/>
                ))
            }
            </div>

            <h1 className="font-bold text-2xl mt-7 pb-1 border-b-[1px]">Upcoming Meetings</h1>
            <div className="w-full h-fit flex flex-wrap gap-x-10">
            {
                upcomingMeetings.map((item)=>(
                    <Meetingcard meet={item}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Meetingroom