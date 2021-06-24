//This renders a section based on the group from the GET request
export default function ProductGroup(props){
    const products = props.products;
    return (
        <>
            <h2>{props.title}</h2>
            <ul className={"product-grid"}>
                {products.map(product => (
                    <div className="product-card">
                        <img src={product.assets[0].url}
                        className="product-image"/>
                        <p>
                            {product.title}
                        </p>
                        <p>
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
