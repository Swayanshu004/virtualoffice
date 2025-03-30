import React from 'react'
import Usercard_team from './Usercard_team';

function Workspace() {
  const teams = [
    {
      name: "Development",
      members: [
        { id: "DEVJD0", name: "John Doe", status: "available", avatar: "/placeholder.svg", initials: "JD" },
        { id: "DEVJS1", name: "Jane Smith", status: "in meeting", avatar: "/placeholder.svg", initials: "JS" },
        { id: "DEVMJ2", name: "Mike Johnson", status: "busy", avatar: "/placeholder.svg", initials: "MJ" },
        { id: "DEVAR3", name: "Anita Rao", status: "available", avatar: "/placeholder.svg", initials: "AR" },
        { id: "DEVSC4", name: "Steve Clark", status: "busy", avatar: "/placeholder.svg", initials: "SC" },
        { id: "DEVDM5", name: "Daniel Miller", status: "available", avatar: "/placeholder.svg", initials: "DM" },
      ],
    },
    {
      name: "Product",
      members: [
        { id: "PROED0", name: "Emily Davis", status: "available", avatar: "/placeholder.svg", initials: "ED" },
        { id: "PROCT1", name: "Chris Turner", status: "in meeting", avatar: "/placeholder.svg", initials: "CT" },
        { id: "PRORF2", name: "Rebecca Ford", status: "available", avatar: "/placeholder.svg", initials: "RF" },
      ],
    },
    {
      name: "Design and UX",
      members: [
        { id: "DESAC0", name: "Alex Chen", status: "available", avatar: "/placeholder.svg", initials: "AC" },
        { id: "DESLP1", name: "Lisa Park", status: "busy", avatar: "/placeholder.svg", initials: "LP" },
        { id: "DESTR2", name: "Tyler Reed", status: "available", avatar: "/placeholder.svg", initials: "TR" },
        { id: "DESMB3", name: "Mia Black", status: "in meeting", avatar: "/placeholder.svg", initials: "MB" },
      ],
    },
    {
      name: "Data and Analytics",
      members: [
        { id: "DANSG0", name: "Samuel Green", status: "available", avatar: "/placeholder.svg", initials: "SG" },
        { id: "DANNP1", name: "Nina Patel", status: "busy", avatar: "/placeholder.svg", initials: "NP" },
        { id: "DANHC2", name: "Henry Clark", status: "available", avatar: "/placeholder.svg", initials: "HC" },
        { id: "DANDS3", name: "Derek Scott", status: "in meeting", avatar: "/placeholder.svg", initials: "DS" },
      ],
    },
    {
      name: "Quality Assurance",
      members: [
        { id: "QADK0", name: "David King", status: "available", avatar: "/placeholder.svg", initials: "DK" },
        { id: "QASW1", name: "Sophia Wright", status: "available", avatar: "/placeholder.svg", initials: "SW" },
        { id: "QAEJ2", name: "Ella Jones", status: "busy", avatar: "/placeholder.svg", initials: "EJ" },
      ],
    },
    {
      name: "DevOps",
      members: [
        { id: "DOVML0", name: "Mark Lee", status: "available", avatar: "/placeholder.svg", initials: "ML" },
        { id: "DOVOC1", name: "Olivia Carter", status: "busy", avatar: "/placeholder.svg", initials: "OC" },
        { id: "DOVKB2", name: "Kevin Brown", status: "available", avatar: "/placeholder.svg", initials: "KB" },
      ],
    },
    {
      name: "Customer Support",
      members: [
        { id: "CSURK0", name: "Rachel Kim", status: "available", avatar: "/placeholder.svg", initials: "RK" },
        { id: "CSUJW1", name: "James White", status: "in meeting", avatar: "/placeholder.svg", initials: "JW" },
        { id: "CSUAB2", name: "Anna Baker", status: "busy", avatar: "/placeholder.svg", initials: "AB" },
        { id: "CSUBH3", name: "Ben Harris", status: "available", avatar: "/placeholder.svg", initials: "BH" },
      ],
    },
    {
      name: "Tech Support",
      members: [
        { id: "TSPRB0", name: "Ryan Brooks", status: "available", avatar: "/placeholder.svg", initials: "RB" },
        { id: "TSPEM1", name: "Ella Morgan", status: "busy", avatar: "/placeholder.svg", initials: "EM" },
        { id: "TSPKA2", name: "Kyle Adams", status: "available", avatar: "/placeholder.svg", initials: "KA" },
      ],
    },
    {
      name: "Research and Innovation",
      members: [
        { id: "RIPW0", name: "Paul Walker", status: "available", avatar: "/placeholder.svg", initials: "PW" },
        { id: "RILZ1", name: "Lucy Zhang", status: "busy", avatar: "/placeholder.svg", initials: "LZ" },
        { id: "RIVC2", name: "Victor Cruz", status: "available", avatar: "/placeholder.svg", initials: "VC" },
      ],
    },
    {
      name: "Marketing and Branding",
      members: [
        { id: "MBRSW0", name: "Sarah Williams", status: "available", avatar: "/placeholder.svg", initials: "SW" },
        { id: "MBRTB1", name: "Tom Brown", status: "available", avatar: "/placeholder.svg", initials: "TB" },
        { id: "MBRKE2", name: "Kate Evans", status: "busy", avatar: "/placeholder.svg", initials: "KE" },
        { id: "MBRJR3", name: "Jacob Reed", status: "available", avatar: "/placeholder.svg", initials: "JR" },
      ],
    },
  ] as const;


  return (
    <div className='w-full'>
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Common Workspace</h2>
            <p className="text-muted-foreground">Team zones and collaboration areas</p>
        </div>
        <div>
            {teams.map((team, i) => (
            <div key={i} className="w-full mt-5">
                <h3 className="text-xl font-bold bg-blue-400 px-5 py-2">{team.name} Team</h3>
                <div className="w-full flex flex-wrap flex-col md:flex-row gap-5">
                    {team.members.map((member) => (
                        <Usercard_team user={member}/>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Workspace