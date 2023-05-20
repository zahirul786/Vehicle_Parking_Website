import { useState } from "react";
import AdminRegistrationPage from "../registrationdropdown/registrationpages/AdminRegistrationPage";
import CustomerRegistrationPage from "../registrationdropdown/registrationpages/CustomerRegistrationPage";
import ParkingRegistrationPage from "../registrationdropdown/registrationpages/ParkingRegistrationPage";
import SignUpDropdownPage from "../pages/SignUpDropdownPage";
function SignUp() {
    const [adminSelection, setAdminSelection] = useState(false);
    const [customerSelection, setCustomerSelection] = useState(false);
    const [parkingSelection, setParkingSelection] = useState(false);
    const handleChange = (option) => {

        if (option.value === "adminsignup") {
            setAdminSelection(true);
            setCustomerSelection(false);
            setParkingSelection(false);
        } else if (option.value === "customersignup") {
            setAdminSelection(false);
            setCustomerSelection(true);
            setParkingSelection(false);
        } else {
            setAdminSelection(false);
            setCustomerSelection(false);
            setParkingSelection(true);
        }
    }
    return (<div className=" bg-gradient-to-r from-orange-500 to-blue-500 text-white pt-20" >
        <div className="text-center relative p-10"><h1>Registration page</h1></div>
        <div className="min-h-screen">
            <div className="flex justify-center h-32">
                <div className="pr-10">Select your Position:</div>
                <SignUpDropdownPage onChange={handleChange} />
            </div>
            <div className="mx-12">
                {adminSelection && <AdminRegistrationPage />}
                {customerSelection && <CustomerRegistrationPage />}
                {parkingSelection && <ParkingRegistrationPage />}
            </div>
        </div>
    </div>)
}

export default SignUp;