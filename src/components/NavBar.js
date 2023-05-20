import Link from "./Link";
import MenuBar from "./MenuBar";
import { useRef, useEffect, useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const links = [{ label: 'Home', path: '/' }, { label: 'Sign Up', path: '/signup' }, { label: 'Sign In', path: '/signin' }, { label: 'Service Request', path: '/servicerequest' }];

    const renderedlink = links.map((link) => {
        return <Link key={link.label} to={link.path} activeClassName="text-red-500">{link.label}</Link>
    })

    const menulinks = [{ label: 'Admin Site', path: '/adminsite' }, { label: 'Customer Site', path: '/customersite' }, { label: 'Parking Site', path: '/parkingsite' }];

    const refEl = useRef();

    useEffect(() => {
        const handle = (event) => {
            if (!refEl.current) {
                return
            }
            if (!refEl.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener('click', handle, true);
        return () => {
            document.removeEventListener('click', handle);
        }
    });
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    const handleMenuClose = () => {
        setShowMenu(false);
    }

    return <div>
        <div ref={refEl} className="inline-block">
            <TfiAlignJustify onClick={handleClick} className=" text-blue-300 hover:text-red-500 inline-block mt-2.5" />
            {showMenu && <MenuBar onMouseLeave={handleMenuClose} menulinks={menulinks} />}
        </div>
        {renderedlink}
    </div>

}

export default NavBar;