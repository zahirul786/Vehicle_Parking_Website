import { GoTriangleDown } from "react-icons/go";
function AdminSignIn() {
    return <div className=" border-2 border-black p-10 border-double rounded-lg">
        <h1 className="flex">Admin Section<GoTriangleDown className="mt-1.5 mx-2 text-green-800" /></h1>
        <form >
            <h3 className="text-white text-center">Admin Login Details</h3>
            <label >User/Email Id:</label>
            <input type="email" id="adminloginuserid" className="w-full p-1 rounded-lg text-black" name="email" required /><br />
            <label >Password:</label>
            <input type="password" id="adminloginpassword" className="w-full p-1 rounded-lg text-black " name="password" required /><br />
            <label >Login:</label>
            <input type="submit" id="adminsigninsubmit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="Click me" />
        </form>
        <label>Forgot Password:</label>
        <button className="px-4 relative text-sky-200">Change Password</button>
    </div>
}

export default AdminSignIn;