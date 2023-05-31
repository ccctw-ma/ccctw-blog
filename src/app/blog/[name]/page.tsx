import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import matter from "gray-matter";

export default async function page(props: { params: { name: string } }) {
    const { name } = props.params;
    const filePath = path.join(process.cwd(), "src", "blogs", `${name}.mdx`);
    const file = matter.read(filePath);
    return (
        <div className="markdown-body">
            <MDXRemote source={file.content} />
        </div>
    );
}
