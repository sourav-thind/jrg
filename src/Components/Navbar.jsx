import {JRGLOGO} from '../Utils';
import { navLists} from '../Constants'
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5  justify-between items-center  '>
        <nav className='flex w-full items-between'>
            <img src={JRGLOGO} alt='JRG Birmingham' width={72} height={56} className='bg-white ' />
            <div className='flex flex-1 justify-end max-sm:hidden'>
                {navLists.map((nav)=>(
                    <div key={nav} className='flex  px-5 text-md text-gray-800 hover:text-black hover:scale-105 cursor-pointer transition-all'>
                        {nav}
                    </div>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar