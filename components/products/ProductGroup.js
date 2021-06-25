export default function ProductGroup(props){
    const products = props.products;
    return (
        <>
            <h2>{props.title}</h2>
            <ul className={"product-grid"}>
                {/*within each product group, generates a card for each product over the span of the group's grid*/}
                {products.map(product => (
                    <div className="product-card">
                        <img src={product.assets[0].url}
                        className="product-image"/>
                        <p className="product-title">
                            {product.title}
                        </p>
                        <p className="product-price">
                            {new Intl.NumberFormat("en-US",
                                {style: "currency",
                                currency: "USD"}).format(product.unitPrice)}
                        </p>
                    </div>
                ))}
            </ul>
        </>
    )
}
