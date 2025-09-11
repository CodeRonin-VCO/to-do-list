import FooterPage from "../features/footer/footer.jsx";
import HeaderPage from "../features/header/header.jsx";
import MainContactPage from "../pages/contact/contact.page.jsx";


export default function ContactPage() {

    return (
        <div className="page">
            <HeaderPage />
            <MainContactPage />
            <FooterPage />  
        </div>
    )
    
}