import MyImage from './Image.png';
import MyImage2 from './Image2.png';
import Bus from './Bus.png';
import Car from './Car.png';
import Truck from './Truck.png';
import Motorbike from './Motorbike.png';
import { IoEarthSharp } from "react-icons/io5";
function ContentBody() {
    return <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 relative flex h-auto justify-end flex-col pt-20 ">
        <h1 className="text-center font-serif m-10 text-blue-300 hover:text-blue-50" >WELCOME TO MY PARKING WORLD</h1>
        <div className="flex box-border">
            <img src={MyImage} alt="MyImage" width="50%" className="self-end ml-24 p-10" />
            <img src={MyImage2} alt="MyImage" width="20%" className="self-start ml-4" />
        </div>
        <div className="m-3">
            <p className="text-blue-300 text-2xl hover:text-blue-50 text-lg font-serif inline-block ml-10">Park Your Vehicle:</p>
            <div className="flex justify-between">
                <div className="border-4 border-blue-200 cursor-pointer border-double hover:opacity-80 bg-blue-300 rounded p-8 m-1">
                    <h2 className="inline-block">Car Parking<IoEarthSharp className="inline-block ml-4 text-3xl hover:animate-spin" /></h2>
                    <img src={Car} alt="Car" width="20%" className="ml-12 inline-block" />
                    <p>The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="border-4 border-blue-200 cursor-pointer border-double hover:opacity-80 bg-blue-300 rounded p-8 m-1">
                    <h2 className="inline-block">Bus Parking<IoEarthSharp className="inline-block ml-4 text-3xl hover:animate-spin" /></h2>
                    <img src={Bus} alt="Bus" width="20%" className="ml-12 inline-block" />
                    <p>The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
            <div className="flex justify-between mt-2">
                <div className="border-4 cursor-pointer border-blue-200 border-double hover:opacity-80 bg-blue-300 rounded p-8 m-1">
                    <h2 className="inline-block">Truck Parking<IoEarthSharp className="inline-block ml-4 text-3xl  hover:animate-spin" /></h2>
                    <img src={Truck} alt="Truck" width="20%" className="ml-12 inline-block" />
                    <p>The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="border-4 border-blue-200 border-double hover:opacity-80 bg-blue-300 rounded p-8 m-1 cursor-pointer">
                    <h2 className="inline-block">Motor Bike Parking<IoEarthSharp className="inline-block ml-4 text-3xl hover:animate-spin" /></h2>
                    <img src={Motorbike} alt="Motor Bike" width="20%" className="ml-12 inline-block" />
                    <p>The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default ContentBody;