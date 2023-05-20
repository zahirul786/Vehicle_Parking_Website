import AdminSignInPage from '../signindropdown/signinpages/AdminSignInPage';
import CustomerSignInPage from '../signindropdown/signinpages/CustomerSignInPage';
import ParkingSignInPage from '../signindropdown/signinpages/ParkingSignInPage';
import { useState } from "react";
import SignInDropdownPage from "../pages/SignInDropdownPage";

function SignIn() {
    const [adminSelection, setAdminSelection] = useState(false);
    const [customerSelection, setCustomerSelection] = useState(false);
    const [parkingSelection, setParkingSelection] = useState(false);
    const handleChange = (option) => {

        if (option.value === "adminsignin") {
            setAdminSelection(true);
            setCustomerSelection(false);
            setParkingSelection(false);
        } else if (option.value === "customersignin") {
            setAdminSelection(false);
            setCustomerSelection(true);
            setParkingSelection(false);
        } else {
            setAdminSelection(false);
            setCustomerSelection(false);
            setParkingSelection(true);
        }
    }
    return (<div className=" bg-gradient-to-r from-pink-500 to-yellow-500 text-white pt-20" >
        <div className="text-center relative p-10"><h1>Sign In page</h1></div>
        <div className="min-h-screen">
            <div className="flex justify-center h-32">
                <div className="pr-10">Select your Position:</div>
                <SignInDropdownPage onChange={handleChange} />
            </div>
            <div className="mx-12">
                {adminSelection && <AdminSignInPage />}
                {customerSelection && <CustomerSignInPage />}
                {parkingSelection && <ParkingSignInPage />}
            </div>
        </div>
    </div>)
}

export default SignIn;