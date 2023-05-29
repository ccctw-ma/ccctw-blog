import React from "react";

export default function Footer() {
    return (
        <footer className="text-zinc-500 p-4 text-center mt-12">
            &copy; {new Date().getFullYear()} &thinsp;
            <a href={process.env.HOME_PAGE}>ccctw-ma</a>. &nbsp; All rights
            reserved
        </footer>
    );
}
