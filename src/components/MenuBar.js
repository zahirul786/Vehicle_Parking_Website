import Link from "./Link";
function MenuBar({ menulinks, onMouseLeave }) {
    const renderedmenulink = menulinks.map((link) => {
        return <Link key={link.label} to={link.path} activeClassName="text-white">{link.label}</Link>
    });

    return <div onMouseLeave={onMouseLeave} className="text-blue-100 flex flex-col justify-around inline-block mt-6 w-40 h-28 absolute bg-violet-600 px-4 pb-6 -ml-3">
        {renderedmenulink}
    </div>
}

export default MenuBar;