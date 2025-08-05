import React from 'react';

const DocumentCard = ({ icon, title, description, fileUrl }) => {
    return (
        <div className="document-card" data-aos="fade-up">
            <div className="icon-container">
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a 
                href={fileUrl} 
                className="download-btn"
                download // This attribute tells the browser to download the file
                target="_blank" // Opens in a new tab, good practice for file links
                rel="noopener noreferrer"
            >
                Scarica PDF
            </a>
        </div>
    );
};

export default DocumentCard;