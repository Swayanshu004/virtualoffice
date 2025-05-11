import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from "react-icons/io5";
// import { BsPersonWorkspace } from "react-icons/bs";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { LuGamepad2 } from "react-icons/lu";


function Navbar() {
  return (
    <div className='w-screen px-5 py-3 flex items-center justify-between text-lg font-semibold bg-white/80 backdrop-blur-2xl fixed'>
        <nav>
            <Link to="/">
                <h1 className='text-3xl font-bold text-blue-950'>VIRTUALOFFICE</h1>
            </Link>
        </nav>
        <nav className='flex items-center gap-1 md:gap-5'>
            <Link to="/notification" className='hover:bg-blue-100 duration-500 ease-in-out px-2 py-2 rounded-md'><IoNotificationsOutline className='text-black text-2xl'/></Link>
            <Link to="/profile" className='hover:bg-blue-100 duration-500 ease-in-out px-2 py-2 rounded-md'>Profile</Link>
        </nav>
    </div>
  )
}

export default Navbar