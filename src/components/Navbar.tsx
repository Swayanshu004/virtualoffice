import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";


function Navbar() {
  return (
    <div className='w-screen px-5 py-3 flex items-center justify-between text-lg font-semibold bg-white/80 backdrop-blur-2xl fixed'>
        <nav>
            <Link to="/">
                <h1 className='text-3xl font-bold text-blue-700'>VIRTUALOFFICE</h1>
            </Link>
        </nav>
        <nav className='flex gap-10'>
            <Link to="/workspace">
                <div className='flex items-center gap-2 hover:bg-neutral-200 duration-150 ease-in-out px-2 py-2 rounded-md'>
                    <BsPersonWorkspace />
                    <h3>Common Workspace</h3>
                </div>
            </Link>
            <Link to="/meeting">
                <div className='flex items-center gap-2 hover:bg-neutral-200 duration-150 ease-in-out px-2 py-2 rounded-md'>
                    <FaChalkboardTeacher />
                    <h3>Meeting Rooms</h3>
                </div>
            </Link>
            <Link to="/chill">
                <div className='flex items-center gap-2 hover:bg-neutral-200 duration-150 ease-in-out px-2 py-2 rounded-md'>
                    <LuGamepad2/>
                    <h3>Chill Area</h3>
                </div>
            </Link>
        </nav>
        <nav className='flex items-center gap-5'>
            <Link to="/notification" className='hover:bg-neutral-200 duration-150 ease-in-out px-2 py-2 rounded-md'><IoNotificationsOutline className='text-black text-xl'/></Link>
            <Link to="/profile" className='hover:bg-neutral-200 duration-150 ease-in-out px-2 py-2 rounded-md'>Profile</Link>
        </nav>
    </div>
  )
}

export default Navbar