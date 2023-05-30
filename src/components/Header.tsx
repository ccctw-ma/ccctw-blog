import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io5/index.js";
export default function Header() {
    return (
        <header className="fixed w-full p-2 z-20 backdrop-blur-md">
            <div className="mx-auto max-w-3xl">
                <nav className="flex items-center gap-3 text-base">
                    <Link href="/" className="group">
                        <h2 className="font-extrabold tracking-tighter p-2 font-mplus text-lg">
                            Ccctw Blog
                        </h2>
                    </Link>
                    <div className="flex-1"></div>
                    <div className="item-center gap-6 flex">
                        {/* <a
                            href="/"
                            className="hidden md:inline-flex no-underline font-extrabold"
                        >
                            About
                        </a> */}
                        <Link
                            href="/tags"
                            className="inline-flex no-underline font-extrabold"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex no-underline font-extrabold"
                        >
                            Project
                        </Link>
                    </div>
                    <div className="flex-1"></div>
                    <a
                        href={process.env.HOME_PAGE}
                        target="_blank"
                        className="inline-flex items-center gap-2 no-underline hover:font-normal transition-all"
                    >
                        <IoLogoGithub />
                        Source
                    </a>
                    <div className="item-center hidden md:block">
                        {/* <ThemeToggle client:visible /> */}
                    </div>
                    {/* <!-- <DropdownMenu client:visible tags={Array.from(allTags)} /> --> */}
                </nav>
            </div>
        </header>
    );
}
