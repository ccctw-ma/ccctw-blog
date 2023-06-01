import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

export default async function page(props: { params: { name: string } }) {
    const { name } = props.params;

    const blogsPath = path.join(process.cwd(), "src", "blogs");
    const files = fs.readdirSync(blogsPath);
    if (files.includes(`${name}.mdx`)) {
        const filePath = path.join(
            process.cwd(),
            "src",
            "blogs",
            `${name}.mdx`
        );
        const file = matter.read(filePath);
        const content = await MDXRemote({ source: file.content });

        return <div className="markdown-body">{content}</div>;
    } else {
        return <h1 className="w-full mt-16 text-center text-2xl">404</h1>;
    }
}
