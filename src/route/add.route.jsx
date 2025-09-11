import FooterPage from "../features/footer/footer.jsx";
import HeaderPage from "../features/header/header.jsx";
import MainAddPage from "../pages/add/add.page.jsx";


export default function AddPage() {

    return (
        <div className="page">
            <HeaderPage />
            <MainAddPage />
            <FooterPage />  
        </div>
    )
    
}