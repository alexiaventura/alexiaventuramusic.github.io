import { Outlet, Link } from "react-router-dom"
import Experience from './Experience.jsx';
import Music from './Music.jsx';
import './Layout.css'

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/experience">EXPERIENCE</Link></li>
                    <li><Link to="/music">MUSIC</Link></li>
                </ul>
            </nav>


            <Outlet />
        </div>
    )
}

export default Layout