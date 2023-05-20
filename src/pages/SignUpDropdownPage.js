import Dropdown from '../context/Dropdown';
import { useState } from 'react';
function SignUpDropdownPage({ onChange }) {
    const [selection, setSelection] = useState(null);
    const handleSelect = (option) => {
        setSelection(option);
        onChange(option);
    }
    const options = [
        { label: 'Admin Registration', value: 'adminsignup', path: '/adminsignup' },
        { label: 'Parking Registration', value: 'parkingsignup', path: '/parkingsignup' },
        { label: 'Customer Registration', value: 'customersignup', path: '/customersignup' },
    ]
    return (<div className="inline-block">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>)
}

export default SignUpDropdownPage;
