import './index.css';
import Route from './components/Route';
import HomePage from './pages/HomePage';
import ServiceRequestPage from './pages/ServiceRequestPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import AdminWebsiteHome from './adminwebsitesection/AdminWebsiteHome';
import CustomerWebsiteHome from './customerwebsitesection/CustomerWebsiteHome';
import ParkingWebsiteHome from './parkingwebsitesection/ParkingWebsiteHome';
import ParkingSlotBooking from './customerwebsitesection/customerwebsitecomponents/ParkingSlotBooking';
function App() {
  return (
    <div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/signin">
        <SignInPage />
      </Route>
      <Route path="/servicerequest">
        <ServiceRequestPage />
      </Route>

      <Route path="/adminsite">
        <AdminWebsiteHome />
      </Route>

      <Route path="/customersite">
        <CustomerWebsiteHome />
      </Route>

      <Route path="/parkingsite">
        <ParkingWebsiteHome />
      </Route>

      <Route path="/parkingbooking">
        <ParkingSlotBooking />
      </Route>

    </div>
  )
}


export default App;