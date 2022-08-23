import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbar = () => {

return (
    <nav class="fixed z-10 bg-white px-2 sm:px-4 py-2.5 w-full border-b border-gray-200">    
        <div class="container flex justify-between items-center mx-auto">
            <div></div>
            <h1 class="place-self-center font-bold text-3xl font-serif">Plants Gone Wild</h1>
            <div class="flex">
                        <Link to={process.env.PUBLIC_URL + '/'} class="block py-2 pr-4 pl-3rounded " aria-current="page"><FontAwesomeIcon icon={faHouse} class ="h-6 w-6"/></Link>
                        <Link to={process.env.PUBLIC_URL + '/shop'} class="block py-2 pr-4 pl-3rounded " aria-current="page"><FontAwesomeIcon icon={faBagShopping} class ="h-6  w-6"/></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;