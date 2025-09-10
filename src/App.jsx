import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './route/home.route.jsx';

function App() {

    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                {/* <Route path='about' element={<AboutPage />} /> */}
            </Routes>
        </>
    )
}

export default App;
