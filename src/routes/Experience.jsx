import { useState } from "react";
import './Experience.css';

function Experience() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="experience-background">
            <div className="experience-content">
                <h1>EXPERIENCE</h1>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('roles')} className="accordion-header">ROLES</h3>
                    {openSection === 'roles' && (
                        <div className="accordion-content">
                            <p>🎵 Artist Partner Group (APG): Business Affairs/Production Intern (6 months)</p>
                            <p>🎵 KUCI 88.9 FM in Irvine: Music Show Host (3 months), Staff Member (3 years)</p>
                            <p>🎵 Marina High School Orchestra: Cellist (4 years)</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('music')} className="accordion-header">MUSIC SKILLS</h3>
                    {openSection === 'music' && (
                        <div className="accordion-content">
                            <p>🎵 Cello: 9 years (age 9 - 18)</p>
                            <p>🎵 Guitar: 1 year, self-taught (age 22 - present)</p>
                            <p>🎵 Songwriting/Composing: 5 years (age 18 - present)</p>
                            <p>🎵 Singing: less than 1 year (age 23 - present)</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('dance')} className="accordion-header">DANCE SKILLS</h3>
                    {openSection === 'dance' && (
                        <div className="accordion-content">
                            <p>🎵 Commercial dance: 2 years (age 21 - 23)</p>
                            <p>🎵 Ballet: 6 years (age 4 - 10)</p>
                            <p>🎵 Tap dance: 2 years (ages 5 and 11)</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('other')} className="accordion-header">OTHER SKILLS</h3>
                    {openSection === 'other' && (
                        <div className="accordion-content">
                            <p>🎵 Artistic photography</p>
                            <p>🎵 DJing/Making playlists</p>
                            <p>🎵 Perfect pitch 😎</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('albums')} className="accordion-header">ALBUMS</h3>
                    {openSection === 'albums' && (
                        <div className="accordion-content">
                            <p>🎵 silently (2023)</p>
                            <p>🎵 lifeless life, lifelong love (2024)</p>
                            <p>🎵 Time (2025)</p>
                        </div>
                    )}
                </div>

                <div className="accordion-section">
                    <h3 onClick={() => toggleSection('honors')} className="accordion-header">HONORS</h3>
                    {openSection === 'honors' && (
                        <div className="accordion-content">
                            <p>🎵 The Drake Gives/Alec Glasser UCI Music Scholarship</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
