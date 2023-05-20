function CustomerRegistration() {
    return <div className="bg-green-500 border-2 border-black border-double p-10 rounded-lg">
        <form>
            <h3 className="text-white text-center">Customer Please Fill out This Form</h3>
            <h4 className="text-red-700">Personal Details: </h4><br />
            <label>Customer Name:</label><br />
            <input type="text" className="w-full p-1 rounded-lg text-black" id="customername" name="name" required /><br />
            <label>Aadhaar Number:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="customeraadhaar" name="aadhaar" required /><br />
            <label>Father Name:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="customerfather" name="father" required /><br />
            <label>Date of Birth:</label>
            <input type="date" id="customerdate" className="w-full p-1 rounded-lg text-black" name="date" required /><br />
            <label>Gender:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="customergender" name="gender" required /><br /><br />
            <h4 className="text-red-700">Contact Details:</h4><br />
            <label >Contact Number:</label>
            <input type="tel" id="customercontact" className="w-full p-1 rounded-lg text-black" name="contact" required /><br />
            <label>Address:</label>
            <input type="text" className="w-full p-1 rounded-lg text-black" id="customeraddress" name="address" required /><br />
            <label >Email Id:</label>
            <input type="email" id="customeremail" className="w-full p-1 rounded-lg text-black" name="email" required /><br />
            <label >Password:</label>
            <input type="password" id="customerpassword" className="w-full p-1 rounded-lg text-black" name="password" required /><br />
            <label >Confirm Password:</label>
            <input type="password" id="customerconfirmPassword" className="w-full p-1 rounded-lg text-black" name="confirmPassword" required /><br />
            <label >Submit:</label>
            <input type="submit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="submit" />
        </form>
    </div>
}

export default CustomerRegistration;