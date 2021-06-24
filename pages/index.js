import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import React from "react";
import ProductGroup from "./ProductGroup";

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
        <section className="discover-aisle">
            <div className="discover-aisle-container">
                <div className="discover-aisle-header">
                    <img src="https://www.papercitymag.com/wp-content/uploads/2020/07/Foxtrot-Interior-University-Park-2.jpg"
                    className="discover-aisle-header-img"/>
                    <div className="discover-aisle-text">
                        <h1 className="discover-aisle-title">Discover Aisle</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus sit amet euismod dui, non pharetra nisi.</p>
                    </div>
                </div>
                <div className="discover-aisle-product-group">
                    <div className="discover-aisle-product-grid">
                        <ProductGroup></ProductGroup>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
