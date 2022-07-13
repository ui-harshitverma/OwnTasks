import React from "react";

function Navigation() {
    const NavLinks = [
        { link: "Home" },
        { link: "About" },
        { link: "Contact Us" },
        { link: "Pages" },
    ];
    return (
        <>
            <nav className="navbar">
                <ul className="list">
                    {NavLinks.map((item) => {
                        return (
                            <li>
                                <a href="https://www.google.co.in/">{item.link}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
export default Navigation;
