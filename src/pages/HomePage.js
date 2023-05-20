import ContentBody from '../homeComponents/ContentBody';
import FooterPage from './FooterPage';
import NavBarPage from './NavBarPage';
function HomePage() {
    return <div>
        <NavBarPage />
        <ContentBody />
        <hr />
        <FooterPage />
    </div>
}

export default HomePage;