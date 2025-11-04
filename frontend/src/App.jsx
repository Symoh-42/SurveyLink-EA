import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import { AboutPage, ContactPage, HomePage, ProjectsPage, ServicesPage } from './pages';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Route>
            </Routes>
        </Router>
    )

}

export default App