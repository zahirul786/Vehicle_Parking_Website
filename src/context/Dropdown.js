import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const refEl = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (!refEl.current) {
                return;
            }
            if (!refEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    const rendered = options.map((option) => {
        return (<div className="hover:bg-sky-500 rounded cursor-pointer p-1 border" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>);
    });
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div ref={refEl} className="w-48 relative inline-block">
            <div className="flex items-center" onClick={handleClick}>{value?.label || 'Select Option'}
                <GoChevronDown className="text-lg ml-2" />
            </div>
            {isOpen && <div>{rendered}</div>}
        </div>
    )
}

export default Dropdown;

