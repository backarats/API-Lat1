import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <>
        <h1>TESTING</h1>
        <br />
        <Link href="/posts" >POSTING PAGE</Link>
        <br/>
        <Link href="/albums" >ALBUM PAGE</Link>
        </>
    )
}