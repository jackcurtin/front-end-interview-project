import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import React from "react";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <main>
          <Navbar></Navbar>
        <h1>
            <Link href="/discover">
                <a>Browse</a>
            </Link>
        </h1>
      </main>
    </div>
  );
};

export default Index;
