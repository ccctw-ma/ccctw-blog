import Link from "next/link";
import React from "react";
import {
    IoLogoGithub,
    IoHome,
    IoDocumentText,
    IoLayersSharp,
} from "react-icons/io5/index.js";

export default function Header() {
    return (
        <header className="fixed w-full p-2 z-20 backdrop-blur-md">
            <div className="mx-auto max-w-3xl">
                <nav className="hidden md:flex items-center gap-3 text-base">
                    <Link href="/" className="group">
                        <h2 className="font-extrabold tracking-tighter p-2 font-mplus text-lg">
                            Ccctw Blog
                        </h2>
                    </Link>
                    <div className="flex-1"></div>
                    <div className="item-center gap-6 flex">
                        <Link
                            href="/blog"
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
                </nav>
                <nav className="flex md:hidden text-lg justify-between items-center px-8 pt-2">
                    <div className="flex gap-3">
                        <Link href="/">
                            <IoHome />
                        </Link>
                        <Link href="/blog">
                            <IoDocumentText />
                        </Link>
                        <Link href="/projects">
                            <IoLayersSharp />
                        </Link>
                    </div>
                    <div>
                        <IoLogoGithub />
                    </div>
                </nav>
            </div>
        </header>
    );
}
