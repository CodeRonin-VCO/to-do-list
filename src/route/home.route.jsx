import FooterPage from "../features/footer/footer.jsx";
import HeaderPage from "../features/header/header.jsx";
import MainHomePage from "../pages/home/home.page.jsx";


export default function HomePage() {

    return (
        <div className="page">
            <HeaderPage />
            <MainHomePage />
            {/* <FooterPage />   */}
        </div>
    )
    
}