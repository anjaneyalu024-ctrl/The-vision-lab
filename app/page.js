import React from 'react';
import './page.css'; // Optional styling for luxury branding

const DepartmentCard = ({ title, description, image }) => {
    return (
        <div className='department-card'>
            <img src={image} alt={title} className='card-image' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const LandingPage = () => {
    const departments = [
        { title: 'Department A', description: 'Description for department A', image: 'url_to_image_A' },
        { title: 'Department B', description: 'Description for department B', image: 'url_to_image_B' },
        { title: 'Department C', description: 'Description for department C', image: 'url_to_image_C' },
    ];

    return (
        <div className='landing-page'>
            <header className='header'>
                <h1>Welcome to The Vision Lab</h1>
                <nav className='navbar'>
                    <a href='#dashboard'>Dashboard</a>
                    <a href='#departments'>Departments</a>
                    <a href='#contact'>Contact Us</a>
                </nav>
            </header>
            <main className='main-content'>
                <section className='department-section'>
                    {departments.map(department => (
                        <DepartmentCard 
                            key={department.title}
                            title={department.title}
                            description={department.description}
                            image={department.image}
                        />
                    ))}
                </section>
            </main>
            <footer className='footer'>
                <p>&copy; {new Date().getFullYear()} The Vision Lab. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;