import Dropdown from '../context/Dropdown';
import { useState } from 'react';
function SignInDropdownPage({ onChange }) {
    const [selection, setSelection] = useState(null);
    const handleSelect = (option) => {
        setSelection(option);
        onChange(option);
    }
    const options = [
        { label: 'Admin Sign In', value: 'adminsignin', path: '/adminsignin' },
        { label: 'Parking Sign In', value: 'parkingsignin', path: '/parkingsignin' },
        { label: 'Customer Sign In', value: 'customersignin', path: '/customersignin' },
    ]
    return (<div className="inline-block">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>)
}

export default SignInDropdownPage;
