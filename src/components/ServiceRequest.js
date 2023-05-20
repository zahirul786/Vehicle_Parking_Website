function ServiceRequest() {
    return (<div className=" bg-gradient-to-r from-sky-500 to-yellow-500 text-violet-900 pt-20">
        <div className="min-h-screen p-10">
            <form className="border-2 border-black border-dashed px-10 pb-4">
                <h3 className="text-center mt-4">Parking Owner Please Fill out This Form</h3><br></br>
                <h4 className="text-red-700">Parking Details:</h4><br></br>
                <label>Parking Name:<span className="text-red-300">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingname" placeholder="Enter parking Name " />
                <label>Parking Licence Number:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="licencenumber" placeholder="Licence Number" required />
                <label>Parking Area:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingarea" placeholder="Enter total Area in Acre" required />
                <label>Parking Type:<span className="text-red-500">*</span></label>
                <select id="parkingtype" className="w-full p-1 rounded-lg text-black">
                    <option value="">Select an Option</option>
                    <option value="Car">Car</option>
                    <option value="Motor Bike">Motor Bike</option>
                    <option value="Bus">Bus</option>
                    <option value="Truck">Truck</option>
                </select>

                <label>Parking Address:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingaddress" placeholder="Enter address in details" required />

                <label>Local area Name:</label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="localarea" placeholder="Enter nearest popular place " />


                <label>Block/Municipal Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="blockmunicipal" placeholder="Enter Block or Municipal name " required />

                <label>Postal Code:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="postalcode" placeholder="Enter pin code " required />


                <label>City Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="cityname" placeholder="Enter parking City Name " required />

                <label>State Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="statename" placeholder="Enter parking state name " required />

                <label>Country Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="countryname" placeholder="Enter parking country name " required /><br></br><br></br>


                <h4 className="text-red-700">Personal Details: </h4><br />
                <label>Parking Owner Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingownername" required placeholder="Enter Owner Name" />
                <label>Father Name:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingownerfather" required placeholder="Paking owner Father name" /><br />
                <label>D.O.B:<span className="text-red-500">*</span></label>
                <input type="date" id="parkingownerdate" className="w-full p-1 rounded-lg text-black" name="date" required placeholder="Owner Date of Birth" /><br />
                <label>Gender:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkinownerggender" name="gender" required /><br></br><br></br>


                <h4 className="text-red-700">Contact Details:</h4><br />
                <label >Contact Number:<span className="text-red-500">*</span></label>
                <input type="tel" id="parkingcontact" className="w-full p-1 rounded-lg text-black" name="contact" required placeholder=" Enter Contact Number" /><br />
                <label >Address:<span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-1 rounded-lg text-black" id="parkingowneraddress" name="address" required placeholder="Enter Parking Owner Address" /><br />
                <label >Email Id:<span className="text-red-500">*</span></label>
                <input type="email" id="parkingemail" className="w-full p-1 rounded-lg text-black" name="email" required placeholder="Enter valid Email" /><br />
                <label>Submit:<span className="text-red-500">*</span></label>
                <input type="submit" className="mt-10 ml-10 p-1 rounded-lg bg-blue-500 text-blue-50" value="send Request" />
            </form>
        </div>
    </div>)
}

export default ServiceRequest;