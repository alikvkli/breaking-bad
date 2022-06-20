import React from 'react';
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="">
                            Anasayfa
                        </Link>
                    </li>
                    <li>
                        <Link to="hakkimizda">
                            Hakkımızda
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Navigation;