import React from "react";
import Image from "next/image";
type Project = {
    img: string;
    title: string;
    description: string;
    url?: string;
};

export default function page() {
    const pros: Array<Project> = [
        {
            img: "/50projects.png",
            title: "50projects",
            description: "A project for learning React and TypeScript",
            url: "https://50projects-react-ts.vercel.app/",
        },
        {
            img: "/rn-app.jfif",
            title: "ReactNative-App",
            description:
                "An Android app for collecting、processing and sending timestamps data, using ReactNative",
            url: "https://github.com/ccctw-ma/RN-collect-timestamps.git",
        },
    ];
    return (
        <section className="relative mt-6 flex flex-col gap-16">
            {pros.map((p) => {
                return (
                    <a
                        key={p.title}
                        href={p.url}
                        target="_blank"
                        className="flex flex-col justify-center items-center hover:text-orange-500"
                    >
                        <Image
                            src={p.img}
                            title={p.description}
                            alt={p.description}
                            width={400}
                            height={400}
                            className="aspect-video object-cover rounded-xl hover:scale-105 transition-all duration-400"
                        />
                        <div className="mt-3 text-xl font-bold ">{p.title}</div>
                    </a>
                );
            })}
        </section>
    );
}
