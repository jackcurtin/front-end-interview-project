import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import React from "react";
import ProductGroup from "../components/products/ProductGroup";
import Footer from "../components/footer/Footer";

const Index = ({ products }) => {
    const groups = products.aisle.groups;
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
                    <ul>
                        {groups.map(group => (
                            <ProductGroup className="discover-aisle-product-group-item"
                                          title={group.name}
                                          products={group.products}
                            >
                            </ProductGroup>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
          <Footer></Footer>
      </main>
    </div>
  );
};

export default Index;

export async function getStaticProps(context) {
    const res = await fetch("https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6")
    const products = await res.json()

    if (!products) {
        return {
            notFound: true,
        }
    }

    return {
        props: { products },
    }
}
