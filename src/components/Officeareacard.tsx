import React from 'react'
import { Link } from 'react-router-dom'

interface areatype {
    name: string;
    description: string;
    accupencyTotal: number;
    accupencyCurrent: number;
    path: string;
}

function Officeareacard({area}:{area:areatype}) {
  return (
    <div>
        <Link to={area.path} key={area.name} className=''>
            <div className='w-full md:w-80 bg-blue-50 text-neutral-900 hover:bg-blue-100 duration-500 p-5 mt-5 border-[1px] border-neutral-300 rounded-md'>
                <h1 className="font-bold text-xl">{area.name}</h1>
                <h3 className='text-sm'>{area.description}</h3>
                <h3 className="text-right mt-5 font-semibold">{area.accupencyCurrent}/{area.accupencyTotal} occupied</h3>
            </div>
        </Link>
    </div>
  )
}

export default Officeareacard