import WebsiteSectionTemplate from "../components/WebsiteSectionTemplate";
function AdminWebsiteHome() {
    const sidebarlinks = [{ label: "Admin Role", path: "/adminrole" }, { label: "Account Creation", path: "/parkingaccountcreation" }, { label: "Account Dashboard", path: "/parkingaccountdashboard" }, { label: "Customer Issues", path: "/customerissues" }, { label: "Parking Issues", path: "/parkingissues" }];
    return <div>
        <WebsiteSectionTemplate sidebarlinks={sidebarlinks} />
    </div>
}

export default AdminWebsiteHome;