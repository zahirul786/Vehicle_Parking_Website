function ParkingRegistration() {
    return <div className="bg-blue-400 border-2 border-black border-double p-10 rounded-lg">
        <form>
            <h3 className="text-cyan-100 text-center">Parking Owner Please Fill out This Form</h3>
            <h4 className="text-red-700">Personal Details: </h4><br />
            <label>Parking Owner Name:</label><br />
            <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingname" name="parkingname" required /><br />
            <label>Service Approval Number:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="approval" name="employee" required /><br />
            <label>Father Name:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingfather" name="father" required /><br />
            <label>Date of Birth:</label>
            <input type="date" id="parkingdate" className="w-full p-1 rounded-lg text-black" name="date" required /><br />
            <label>Gender:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="parkinggender" name="gender" required /><br /><br />
            <h4 className="text-red-700">Contact Details:</h4><br />
            <label >Contact Number:</label>
            <input type="tel" id="parkingcontact" className="w-full p-1 rounded-lg text-black" name="contact" required /><br />
            <label>Address:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingaddress" name="address" required /><br />
            <label >Email Id:</label>
            <input type="email" id="parkingemail" className="w-full p-1 rounded-lg text-black" name="email" required /><br />
            <label >Password:</label>
            <input type="password" id="parkingpassword" className="w-full p-1 rounded-lg text-black" name="password" required /><br />
            <label >Confirm Password:</label>
            <input type="password" id="parkingconfirmPassword" className="w-full p-1 rounded-lg text-black" name="confirmPassword" required /><br />
            <label >Submit:</label>
            <input type="submit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="submit" />
        </form>
    </div>
}

export default ParkingRegistration;