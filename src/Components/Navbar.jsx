import { JRGLOGO } from '../Utils';
import { navLists } from '../Constants'
const Navbar = () => {
    return (
        <header className=' py-5 sm:px-10 px-5  z-10 top-0 left-0 w-full bg-Color2 '>
            <nav className=' items-between'>
                <img src={JRGLOGO} alt='JRG Birmingham' width={72} height={56} className='' />
                <div className='flex flex-1 justify-end max-sm:hidden'>
                    {navLists.map((nav) => (
                        <div key={nav} className='flex  px-5 text-lg font-semibold text-gray-800 hover:text-black hover:scale-110 cursor-pointer transition-all' >
                            <a
                                href={``}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(nav);
                                    if (element) {
                                        element.scrollIntoView({ behavior:"smooth" });
                                    }
                                }}
                            >
                                {nav}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar