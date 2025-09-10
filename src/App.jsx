import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './route/home.route.jsx';
import AddPage from './route/add.route.jsx';
import ContactPage from './route/contact.route.jsx';


function App() {

    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='add' element={<AddPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App;
