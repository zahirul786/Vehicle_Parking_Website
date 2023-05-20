import WebsiteSectionTemplate from "../components/WebsiteSectionTemplate";
function CustomerWebsiteHome() {
    const sidebarlinks = [{ label: "Account Creation", path: "/accountcreation" }, { label: "Account Dashboard", path: "/accountdashboard" }, { label: "Book Parking", path: "/parkingbooking" }, { label: "Order History ", path: "/orderhistory" }, { label: "Account Settings", path: "/accountsetting" }];
    return <div>
        <WebsiteSectionTemplate sidebarlinks={sidebarlinks} />
    </div>
}

export default CustomerWebsiteHome;