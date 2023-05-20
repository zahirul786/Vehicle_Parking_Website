import WebsiteSectionTemplate from "../components/WebsiteSectionTemplate";
function ParkingWebsiteHome() {
    const sidebarlinks = [{ label: "Parking Description", path: "/parkingdescription" }, { label: "Account Creation", path: "/parkingaccountcreation" }, { label: "Account Dashboard", path: "/parkingaccountdashboard" }, { label: "Booking List", path: "/parkingbookinglist" }, { label: "Avaiable Parking Slot", path: "/avaiableparkingslot" }, { label: "Account Settings", path: "/parkingaccountsetting" }];
    return <div>
        <WebsiteSectionTemplate sidebarlinks={sidebarlinks} />
    </div>
}

export default ParkingWebsiteHome;