import React from "react";

const Navbar = () => {
    const links = (
        <>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>FAQ</a>
            </li>
            <li>
                <a>Changelog</a>
            </li>
            <li>
                <a>Blog</a>
            </li>
            <li>
                <a>Download</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <button className="btn ms-4 bg-linear-to-r from-purple-700 to-purple-500 text-white">
                + New Ticket
            </button>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
            <div className="flex-1">
                <a className="font-bold text-xl">CS - Tickets System</a>
            </div>
            <div className="flex-none">
                <ul className="menu hidden md:flex menu-horizontal px-1 items-center">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
