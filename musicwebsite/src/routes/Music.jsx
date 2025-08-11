import { useState } from "react";
import './Music.css';

function Music() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="music-background">
            <div className="experience-content">
                <h1>MUSIC</h1>

            </div>
        </div>
    );
}

export default Music;
