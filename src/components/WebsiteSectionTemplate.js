import { useState, useRef, useEffect } from "react";
import Link from "./Link";
import NavBarPage from "../pages/NavBarPage";
import CustomerSignInPage from '../signindropdown/signinpages/CustomerSignInPage';
import AdminSignInPage from '../signindropdown/signinpages/AdminSignInPage';
import ParkingSignInPage from '../signindropdown/signinpages/ParkingSignInPage';
import useNavigation from "../hooks/use-navigation";
function WebsiteSectionTemplate({ sidebarlinks }) {
    const [showSidebar, setShowSidebar] = useState(true);
    const [smallSidebar, setSmallSidebar] = useState(false);
    const [currentWebsite, setCurrentWebsite] = useState(null);
    const refEl = useRef();
    const { currentPath } = useNavigation();

    useEffect(() => {
        const handle = (event) => {
            if (!refEl.current) {
                return;
            }
            if (!refEl.current.contains(event.target)) {
                setShowSidebar(false);
                setSmallSidebar(true);
            }
        }
        document.addEventListener('click', handle, true);

        if (currentPath === '/customersite') {
            setCurrentWebsite(<CustomerSignInPage />);
        }
        if (currentPath === '/adminsite') {
            setCurrentWebsite(<AdminSignInPage />);
        }
        if (currentPath === '/parkingsite') {
            setCurrentWebsite(<ParkingSignInPage />);
        }

        return () => {
            document.removeEventListener('click', handle);
        }
    }, []);

    const handleClick = () => {
        setShowSidebar(!showSidebar);
        setSmallSidebar(!smallSidebar);
    }


    const renderedlink = sidebarlinks.map((link) => {
        return <Link key={link.label} to={link.path} className="mt-5" activeClassName="text-red-500">{link.label}</Link>
    })

    return <div>
        <div>
            <NavBarPage />
        </div>
        {showSidebar && <div ref={refEl} onMouseLeave={handleClick} className="w-1/10 h-full p-5 fixed top-12 bg-blue-700 z-40">
            <div className="flex mt-6 justify-center flex-col">
                {renderedlink}
            </div>
        </div>}
        {smallSidebar && <div onMouseEnter={handleClick} className="h-1/2 mt-24 fixed bg-sky-600 min-w-1/50 rounded">
        </div>}
        <div className=" bg-gradient-to-r from-yellow-300 to-red-500 pt-24 p-12 min-h-screen">
            {currentWebsite}
        </div>
    </div>

}

export default WebsiteSectionTemplate;