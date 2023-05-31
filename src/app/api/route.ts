import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
const root = process.cwd();

export async function GET(request: Request) {
    const dirs = fs.readdirSync(path.join(root, "src", "blogs"));
    return NextResponse.json({ message: "Hello, world!", dirs });
}