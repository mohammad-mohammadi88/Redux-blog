import type { FC } from 'react';
import { NavLink } from "react-router-dom"
const Navbar :FC = () => {
    return (
        <nav>
        <section>
            <h1>Redux Essentials Example</h1>
            <div className="navContent">
                <div className="navLinks">
                    <NavLink to="/" dideo-checked="true">Posts</NavLink>
                    <NavLink to="/users" dideo-checked="true">Users</NavLink>
                </div>
            </div>
        </section>
    </nav>
    )
}

export default Navbar