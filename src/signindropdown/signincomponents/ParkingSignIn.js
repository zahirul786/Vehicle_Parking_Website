import { GoTriangleDown } from "react-icons/go";
function ParkingSignIn() {
    return <div className=" border-2 border-black p-10 border-double rounded-lg">
        <h1 className="flex">Parking Section<GoTriangleDown className="mt-1.5 mx-2 text-green-800" /></h1>
        <form>
            <h3 className="text-white text-center">Parking Login Details</h3>
            <label >User/Email Id:</label>
            <input type="email" id="parkingloginuserid" className="w-full p-1 rounded-lg text-black" name="email" required /><br />
            <label >Password:</label>
            <input type="password" id="parkingloginpassword" className="w-full p-1 rounded-lg text-black " name="password" required /><br />
            <label >Login:</label>
            <input type="submit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="Click me" />
        </form>
        <label>Forgot Password:</label>
        <button className="px-4 relative text-sky-200">Change Password</button>
    </div>
}

export default ParkingSignIn;