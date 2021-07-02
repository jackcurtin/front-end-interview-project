export default function ProductGroup(props){
    const products = props.products;
    return (
        <>
            <h2>{props.title}</h2>
            <ul className={"product-grid"}>
                {/* within each product group, generates a card for each product over the span of the group's grid */}
                {products.map(product => (
                    <div className="product-card">
                        {/* All products only have one asset in the array - the thumbnail */}
                        <img src={product.assets[0].url}
                        className="product-image"/>
                        <p className="product-title">
                            {product.title}
                        </p>
                        <p className="product-price">
                            {/* creates new formatting for USD currency, then applies to unit price */}
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
