function AdminRegistration() {
    return <div className=" border-2 border-black p-10 border-double rounded-lg">
        <form>
            <h3 className="text-white text-center">Admin Please Fill out This Form</h3>
            <h4 className="text-red-700">Personal Details: </h4><br />
            <label>Employee Name:</label><br />
            <input type="text" className="w-full p-1 rounded-lg text-black" id="adminname" name="name" required /><br />
            <label>Employee Id:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="adminid" name="employee" required /><br />
            <label>Father Name:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="adminfather" name="father" required /><br />
            <label>Date of Birth:</label>
            <input type="date" id="admindate" className="w-full p-1 rounded-lg text-black" name="date" required /><br />
            <label>Gender:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="admingender" name="gender" required /><br /><br />
            <h4 className="text-red-700">Contact Details:</h4><br />
            <label >Contact Number:</label>
            <input type="tel" id="admincontact" className="w-full p-1 rounded-lg text-black" name="contact" required /><br />
            <label>Address:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="adminaddress" name="address" required /><br />
            <label >Email Id:</label>
            <input type="email" id="adminemail" className="w-full p-1 rounded-lg text-black" name="email" required /><br />
            <label >Password:</label>
            <input type="password" id="adminpassword" className="w-full p-1 rounded-lg text-black " name="password" required /><br />
            <label >Confirm Password:</label>
            <input type="password" id="adminconfirmPassword" className="w-full p-1 rounded-lg text-black" name="confirmPassword" required /><br />
            <label >Submit:</label>
            <input type="submit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="submit" />
        </form>
    </div>
}

export default AdminRegistration;