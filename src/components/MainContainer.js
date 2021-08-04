import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Works') {
            return <Works />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }

        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="main">
            <div className="content">
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <div className="container-lg">
                    {renderPage()}
                </div>
            </div>
            <Footer />
        </div>
    );

}
